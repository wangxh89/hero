import { connect } from 'dva';
import styles from './index.less';
function App({summoner,dispatch}) {
    const { summoners } = summoner;
    return (
        <div className={styles.normal}>
            <h2>
                {JSON.stringify(summoners,null,4)}
            </h2>
        </div>
    );
}
export default connect(({summoner})=>({summoner}))(App);
