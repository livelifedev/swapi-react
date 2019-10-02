const tooltip = () => (
  <style global jsx>{`
    .tooltip {
      position: relative;
      display: inline-block;
      border-bottom: 1px dotted black;
    }
    .tooltip .tooltiptext {
      visibility: hidden;
      min-width: 120px;
      background-color: black;
      color: #fff;
      text-align: center;
      padding: 10px;
      margin: -18px 0 0 -4px;
      position: absolute;
      z-index: 1;
      font-size: 0.8rem;
    }
    .tooltip:hover .tooltiptext {
      visibility: visible;
    }
  `}</style>
);

export default tooltip;
