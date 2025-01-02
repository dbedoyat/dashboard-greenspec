import Card from '@/components/Card';
import StatusBar from '@/components/StatusBar';
import Welcome from '@/components/Welcome';
import LineChart from '@/components/LineChart';
import {statusBarData, welcomeData, userName, chartData} from '@/mockData';
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
          <Card title='Hola'>Contenido</Card>
        </div>
        <div className={`${styles.item} ${styles.item2}`}>
          <Card title='Hola'>Contenido</Card>
        </div>
        <div className={`${styles.item} ${styles.item3}`}>
          <Card title='Hola'>Contenido</Card>
        </div>
        <div className={`${styles.item} ${styles.item4}`}>
          <Card title='Climate Overview'>
            <LineChart chartData={chartData} />
          </Card>
        </div>
        <div className={`${styles.item} ${styles.item5}`}>
          <Card title='Ferti Overview'>Contenido</Card>
        </div>
      </div>
    </div>
  );
}
