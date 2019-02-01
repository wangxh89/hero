import React from 'react';
import { connect } from 'dva';
import styles from './index.less';
import FreeHeroItem from './components/FreeHeroItem';
import heroModel from './models/hero';
import { Row, Col, Card, Radio } from 'antd';
const RedioGroup = Radio.Group;
const {namespace, acType} = heroModel;
const heroType = [
  { key: 0, value: '全部' },
  { key: 1, value: '战士' },
  { key: 2, value: '法师' },
  { key: 3, value: '坦克' },
  { key: 4, value: '刺客' },
  { key: 5, value: '射手' },
  { key: 6, value: '辅助' },
];
function App({ heros, filterKey, freeheros, itemHover, onChange, onItemHover }) {
  // const onChange = e => {
  //   console.log(e.target.value);
  //   dispatch({ type: `${namespace}/${acType.save_state}`, payload: { filterKey: e.target.value } });
  // };
  // const onItemHover = index=> {
  //   dispatch({type:`${namespace}/${acType.save_state}`, payload:{itemHover: index}});
  // }
  return (
    <div className={styles.normal}>
      <div className={styles.info}>
        <Row className={styles.freehero}>
          <Col span={24}>
            <p>周免英雄</p>
              {freeheros.map((data, index) => {
                return (
                  <FreeHeroItem
                    data={data}
                    itemHover={itemHover}
                    onItemHover={onItemHover}
                    thisIndex={index}
                    key={index}
                  />
                );
              })}
          </Col>
        </Row>
      </div>
      <Card className={styles.radioPanel}>
        <RedioGroup onChange={onChange} value={filterKey}>
          {heroType.map(data => (
            <Radio value={data.key} key={`hero-radio-${data.key}`}>
              {data.value}
            </Radio>
          ))}
        </RedioGroup>
      </Card>
      <Row>
        {heros
          .filter(item => filterKey === 0 || item.hero_type === filterKey)
          .reverse()
          .map(item => (
            <Col key={item.ename} span={3} className={styles.heroitem}>
              <img
                alt="img"
                src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${
                  item.ename
                }.jpg`}
              />
              <p>{item.cname}</p>
            </Col>
          ))}
      </Row>
    </div>
  );
}
const mapStateToProps = (state) => {
  const {heros = [], filterKey = 0,freeheros = [] ,itemHover=0 } = state[namespace];
  return {heros, filterKey, freeheros, itemHover};
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange(e) {
      console.log(e.target.value);
      dispatch({ type: `${namespace}/${acType.save_state}`, payload: { filterKey: e.target.value } });
    },
    onItemHover(index) {
      dispatch({type:`${namespace}/${acType.save_state}`, payload:{itemHover: index}});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
