import React from 'react'


import { Card , Divider, Col} from 'antd';
const { Meta } = Card;


const Cards = () => {
    return (
      <div className="container">
        <div className="row">
          <Divider>
            {" "}
            <h2 style={{fontFamily: 'Luckiest Guy'}}>Featured</h2>
          </Divider>
          <Col xs={24} md={8}>
            <Card
              hoverable
              style={{ maxWidth: 300, margin: "1em auto" }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card
              hoverable
              style={{ maxWidth: 300, margin: "1em auto" }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card
              hoverable
              style={{ maxWidth: 300, margin: "1em auto" }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        </div>
      </div>
    )
}

export default Cards
