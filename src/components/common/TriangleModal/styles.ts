import styled from "styled-components";
import { Flex } from "styles/mixins";

const TopGeneral = '16px';

const TriangleModalStyles = {
  Container : styled.div`
    width: $width-icon-cart;
    position: absolute;
    top: calc(${TopGeneral} * -1);
    right: 10px;
    ${Flex()}
  `,
  Figure : styled.div`
    width: 0;
    height: 0;
    border-bottom: 16px solid #fff;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
  `
}

export default TriangleModalStyles;