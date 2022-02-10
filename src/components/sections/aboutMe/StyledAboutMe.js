import styled from 'styled-components';

export const Section = styled.section`
  height: 100vh;
  width: 100%;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1118%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(13%2c 15%2c 54%2c 1)'%3e%3c/rect%3e%3cpath d='M1464 560L0 560 L0 497.83Q41.43 467.26%2c 72 508.69Q75.04 439.73%2c 144 442.77Q163.42 390.19%2c 216 409.6Q288.35 409.95%2c 288 482.3Q359.49 433.79%2c 408 505.28Q450.26 427.54%2c 528 469.8Q564.03 385.83%2c 648 421.86Q726.54 380.4%2c 768 458.95Q825.75 444.7%2c 840 502.45Q859.65 450.1%2c 912 469.74Q962.86 400.6%2c 1032 451.46Q1082.05 381.5%2c 1152 431.55Q1200.6 360.14%2c 1272 408.74Q1332.01 396.75%2c 1344 456.76Q1419.15 411.91%2c 1464 487.07z' fill='rgba(41%2c 67%2c 128%2c 1)'%3e%3c/path%3e%3cpath d='M1512 560L0 560 L0 580.16Q30.72 490.88%2c 120 521.59Q172.24 453.83%2c 240 506.06Q267.8 461.86%2c 312 489.66Q407.63 465.29%2c 432 560.92Q462.72 471.64%2c 552 502.36Q617.74 448.1%2c 672 513.83Q728.92 498.75%2c 744 555.67Q766.49 506.16%2c 816 528.65Q904.72 497.37%2c 936 586.08Q957.8 487.88%2c 1056 509.69Q1084.29 465.98%2c 1128 494.26Q1179.76 474.02%2c 1200 525.79Q1281.96 487.75%2c 1320 569.71Q1352.92 482.63%2c 1440 515.56Q1470.24 473.79%2c 1512 504.03z' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1118'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover;

  z-index: 2;
  &::before {
    content: '';
    width: 100%;
    height: 300px;
    background-color: #0D0F36;
    transform: skewY(-4deg);
    position: absolute;
    z-index: 2;

  }
`;
