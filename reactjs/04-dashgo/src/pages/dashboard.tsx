import { Flex } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});
import { ApexOptions } from 'apexcharts';

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-05-04T00:00:00.000Z',
      '2021-05-05T00:00:00.000Z',
      '2021-05-06T00:00:00.000Z',
      '2021-05-07T00:00:00.000Z',
      '2021-05-08T00:00:00.000Z',
      '2021-05-09T00:00:00.000Z',
      '2021-05-10T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [{ name: 'series1', data: [31, 120, 10, 28, 61, 18, 109] }];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
      </Flex>
    </Flex>
  );
}
