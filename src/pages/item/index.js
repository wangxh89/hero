import React from 'react';
import { connect } from 'dva';
import {Row, Col, Radio, Card} from 'antd';
import styles from './index.less';
const itemType = [
  { key: 0, value: '全部' },
  { key: 1, value: '攻击' },
  { key: 2, value: '法术' },
  { key: 3, value: '防御' },
  { key: 4, value: '移动' },
  { key: 5, value: '打野' },
  { key: 7, value: '辅助' },
];
const RadioGroup = Radio.Group;
function App({item,dispatch}) {
    const { items=[] ,filterKey=0} = item;
    const onChange = e => {
      console.log(e.target.value);
      dispatch({type:"item/save", payload:{filterKey:e.target.value}})
    }
    return (
        <React.Fragment>
            <Card className={styles.radioPanel}>
          <RadioGroup onChange={onChange} value={filterKey}>
            {itemType.map(data => (
              <Radio value={data.key} key={`item-radio-${data.key}`}>
                {data.value}
              </Radio>
            ))}
          </RadioGroup>
            </Card>
        <Row>
          {
            items.filter(item=>filterKey===0||item.item_type === filterKey).reverse().map(item => (
              <Col span={3} key={item.item_id} className={styles.item}>
                <img alt="img" src={`https://game.gtimg.cn/images/yxzj/img201606/itemimg/${item.item_id}.jpg`} />
                <p>{item.item_name}</p>
              </Col>
            ))
          }
        </Row>
        </React.Fragment>
    );
}
export default connect(({item})=>({item}))(App);
