// import React, { useState, useEffect } from 'react';

// // import 'bootstrap/dist/css/bootstrap.min.css';
// import './SleepCycle.css';

// import { Liquid } from '@ant-design/charts';
// import { RadialBar, RingProgress, Gauge } from '@ant-design/charts';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// var data = [
//   {
//     name: 'Superficial',
//     star: 10,
//     color: '#1ad5de'
//   },
//   {
//     name: 'Entrando no sono profundo',
//     star: 0,
//     color: '#a0ff03'
//   },
//   {
//     name: 'Sono profundo',
//     star: 0,
//     color: '#a0ff03'
//   },
//   {
//     name: 'REM',
//     star: 0,
//     color: '#1ad5de'
//   },
// ];

// var config = {
//   data: data,
//   xField: 'name',
//   yField: 'star',
//   maxAngle: 270,
//   radius: 0.8,
//   innerRadius: 0.2,
//   barStyle: { lineCap: 'round' },
//   color: function color(_ref) {
//     var name = _ref.name;
//     return data.find(function (d) {
//       return d.name === name;
//     }).color;
//   },
// };

// var config2 = {
//   height: 100,
//   width: 100,
//   // autoFit: false,
//   percent: 0.7,
//   color: ['#5B8FF9', '#E8EDF3'],
//   title: 'hugo',
//   statistic: {
//     title: {
//       style: {
//         color: '#363636',
//         fontSize: '12px',
//         lineHeight: '14px',
//       },
//       formatter: function formatter() {
//         return 'REM';
//       },
//     },
//   }
// };

// var config3 = {
//   // percent: 0.75,
//   // range: { color: 'l(0) 0:#B8E1FF 1:#3D76DD' },
//   // startAngle: Math.PI,
//   // endAngle: 2 * Math.PI,
//   // indicator: null,
//   // statistic: {
//   //   title: {
//   //     offsetY: -36,
//   //     style: {
//   //       fontSize: '26px',
//   //       color: '#4B535E',
//   //     },
//   //     formatter: function formatter() {
//   //       return '10 min';
//   //     },
//   //   },
//   //   content: {
//   //     style: {
//   //       fontSize: '14px',
//   //       color: '#4B535E',
//   //     },
//   //     formatter: function formatter() {
//   //       if (10 > 10) {
//   //         return 'Sono profundo';
//   //       }
//   //       else {
//   //         return 'REM';
//   //       }
//   //     },
//   //   },
//   // },
// };

// export default class SleepCycle extends React.Component {

//   constructor() {
//     super();

//     this.state = {
//       events: [],
//       loading: false
//     }

//   }

//   render() {

//     return (
//       <div className="root">
//         <div className="container">
//           <div className="row noMargin">
//             <div className="col one cycle-background shadow-effect" >
//               <Container>
//                 <Row>
//                   Fase 1
//                   <RingProgress {...config2} />
//                   Fase 2
//                   <RingProgress {...config2} />
//                   Fase 2
//                   <RingProgress {...config2} />
//                 </Row>
//                 <Row>
//                   <Gauge {...config3} height={80} />
//                   <Gauge percent='0.35' />
//                   <Gauge title="核销率" height={164} percent={87} />
//                 </Row>
//               </Container>
//               {/* <Liquid {...config} /> */}
//               {/* <RadialBar {...config} /> */}
//               {/* <Container>
//                 <Row>
//                   <Col className="row-cycle">1 of 3</Col>
//                   <Col className="row-cycle" xs={6}>2 of 3 (wider)</Col>
//                   <Col className="row-cycle">3 of 3</Col>
//                 </Row>
//                 <Row>
//                   <Col className="row-cycle">1 of 3</Col>
//                   <Col className="row-cycle" xs={5}>2 of 3 (wider)</Col>
//                   <Col className="row-cycle">3 of 3</Col>
//                 </Row>
//                 <Row>
//                   <Col className="row-cycle">1 of 3</Col>
//                   <Col className="row-cycle" xs={5}>2 of 3 (wider)</Col>
//                   <Col className="row-cycle">3 of 3</Col>
//                 </Row>
//               </Container> */}
//             </div>
//           </div>
//         </div>
//         <br />
//       </div>
//     );
//   }


// }

