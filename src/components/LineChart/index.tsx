'use client';
import dynamic from 'next/dynamic';
import 'chart.js/auto';
import styles from './LineChart.module.css';

const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
});

interface ChartData {
  labels: string[];
  datasets: Dataset[];
}

interface Dataset {
  label: string;
  data: number[];
  fill: boolean;
  borderColor: string;
  tension: number;
}

const LineChart = ({chartData}: {chartData: ChartData}) => {
  return (
    <div>
      <Line className={styles.chart} data={chartData} />
    </div>
  );
};
export default LineChart;
