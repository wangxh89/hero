import styles from './index.css';
import {Layout, Menu} from 'antd';
import Link from 'umi/link'

const {Header, Content, Footer} = Layout;
const menuData = [
  { route: 'hero', name: '英雄' },
  { route: 'item', name: '局内道具' },
  { route: 'summoner', name: '召唤师技能' },
  {route:'pollimg', name:'轮询'}
];
function BasicLayout(props) {
  const { location: {pathname}, children} = props;
  return (
    <Layout>
      <Header>
        <span className={styles.logo}>王者荣耀资料库</span>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[pathname]}
          style={{lineHeight:'64px'}}
        >
          {
            menuData.map(menu => (
              <Menu.Item key={`/${menu.route}`}>
                <Link to={menu.route}>{menu.name}</Link>
              </Menu.Item>
            ))
          }
        </Menu>

      </Header>
      <Content style={{padding:'0 50px'}}>
        <div style={{background:'#fff', padding:24, minHeight:280}}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign:'center'}}>Umi 入门教程 Created by xiaohuoni</Footer>
    </Layout>

  );
}

export default BasicLayout;
