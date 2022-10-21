import React, { useEffect, useState } from 'react';

import {
  Box,
  Card,
  Center,
  Grid,
  Group,
  Image,
  Loader,
  Text
} from '@mantine/core';

import GridCol from '../GridCol';

import { fetchCurrencyPrices } from '../../api/crypto';
import { getCurrencyIcon } from '../../services/crypto';

const currencies = ['bitcoin', 'ethereum', 'chainlink'];

const CryptoPrices = () => {
  const [loading, setIsLoading] = useState(true);
  const [currencyData, setCurrencyData] = useState(null);

  const fetchCurrencies = async () => {
    const response = await fetchCurrencyPrices(currencies.toString());

    if (response?.isSuccess) {
      setCurrencyData(response?.data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (currencyData) {
      const updateCurrencyData = (data) => {
        const newCurrencyData = [...currencyData];

        Object.keys(data).forEach((key) => {
          const indexOfData = newCurrencyData.findIndex(
            (currency) => currency.id === key
          );

          newCurrencyData[indexOfData].priceUsd = data[key];
        });

        setCurrencyData(newCurrencyData);
      };

      const ws = new WebSocket(
        `wss://ws.coincap.io/prices?assets=${currencies.toString()}`
      );

      ws.onmessage = (msg) => {
        updateCurrencyData(JSON.parse(msg.data));
      };

      return () => ws.close();
    }
  }, [currencyData]);

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <GridCol colStart={6} colEnd={13} rowStart={1} rowEnd={5}>
      <Box
        p="xs"
        sx={(theme) => ({
          height: '100%',
          backgroundColor: theme.colors.dark[5]
        })}
      >
        <Grid sx={{ height: '100%' }} grow>
          {loading ? (
            <Grid.Col span={12}>
              <Center sx={{ height: '100%' }}>
                <Loader color="white" variant="dots" />
              </Center>
            </Grid.Col>
          ) : (
            currencies?.map((currency) => {
              const cData = currencyData.find((c) => c.id === currency);
              return (
                <Grid.Col key={currency} span={4}>
                  <Card sx={(theme) => ({ color: theme.white })}>
                    <Group position="apart">
                      <Image
                        width={30}
                        src={getCurrencyIcon(currency)}
                        alt={currency}
                      />
                      <Text align="center" size="xl" weight={600}>
                        {cData?.symbol}
                      </Text>
                    </Group>
                    <Box pt="sm">
                      <Text align="center" weight={600}>
                        USD
                      </Text>
                      <Text size="lg" align="center">
                        {Number(cData?.priceUsd).toFixed(2)}
                      </Text>
                    </Box>
                  </Card>
                </Grid.Col>
              );
            })
          )}
        </Grid>
      </Box>
    </GridCol>
  );
};

export default CryptoPrices;
