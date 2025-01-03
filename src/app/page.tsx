import Card from '@/components/Card';
import StatusBar from '@/components/StatusBar';
import Welcome from '@/components/Welcome';
import LineChart from '@/components/LineChart';
import Farms from '@/components/Farms';
import QuickSettings from '@/components/QuickSettings';
import Monitor from '@/components/Monitor';
import {Icon} from '@iconify/react';

import {
  statusBarData,
  welcomeData,
  userName,
  chartData,
  farmsData,
} from '@/mockData';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <div>
        <Welcome userName={userName} welcomeData={welcomeData} />
      </div>
      <div className={styles.status}>
        <Card>
          <StatusBar statusBarData={statusBarData} />
        </Card>
      </div>
      <div className={styles.grid}>
        <div className={`${styles.item} ${styles.item1}`}>
          <Card title='Your Farms (GSC Tabs)'>
            <Farms farmsData={farmsData} />
          </Card>
        </div>
        <div className={`${styles.item} ${styles.item2}`}>
          <Card title='Monitor Sensors'>
            <Monitor />
          </Card>
        </div>
        <div className={`${styles.item} ${styles.item3}`}>
          <Card title='Quick Program Settings'>
            <QuickSettings />
          </Card>
        </div>
        <div className={`${styles.item} ${styles.item4}`}>
          <Card title='Climate Overview'>
            <div className={styles.intensity}>
              <Card title='Light Intensity' color='#2a4b87' bg='#fdd866'>
                <div className={styles.icon}>
                  <Icon icon={`:ph:sun`} className={styles.icon} ssr={true} />
                </div>
                <span>50 Watts</span>
              </Card>
            </div>
            <div className={styles.chart}>
              <LineChart chartData={chartData} />
            </div>
          </Card>
        </div>
        <div className={`${styles.item} ${styles.item5}`}>
          <Card title='Ferti Overview'>Contenido</Card>
        </div>
      </div>
    </div>
  );
}
