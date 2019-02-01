import { connect } from 'dva';
import styles from './index.less';
function App({herodetail,dispatch,match}) {
    console.log(match);
    return (
        <div className={styles.normal}>
            <h2>
                herodetail ename page ename
            </h2>
        </div>
    );
}
export default connect(({herodetail})=>({herodetail}))(App);
