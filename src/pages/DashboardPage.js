import Feed from '../components/Feed/Feed';
import Sidebar from '../components/Sidebar/Sidebar';
import Widgets from '../components/Widgets/Widgets';
import styles from './DashboardPage.module.css';




function DashboardPage(props) {
    return (
        <main className={styles.DashboardPage}>
          
          <Sidebar />
          <Feed />
          <Widgets />
          
        </main>
        
    )
}

export default DashboardPage;