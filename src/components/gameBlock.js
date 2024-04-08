import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";
import RGL, { WidthProvider } from "react-grid-layout";
export const GameBlock = () => {
  const ReactGridLayout = WidthProvider(RGL);

  // 10 blocks
  const layout = [
    { i: "a", x: 0, y: 0, w: 2, h: 1, stand: "horizontal", target: false },
    { i: "b", x: 0, y: 1, w: 1, h: 1, stand: "horizontal", target: false },
    { i: "c", x: 1, y: 1, w: 1, h: 1, stand: "horizontal", target: false },
    { i: "d", x: 0, y: 2, w: 1, h: 1, stand: "horizontal", target: false },
    { i: "e", x: 1, y: 2, w: 1, h: 1, stand: "horizontal", target: false },
    { i: "e", x: 1, y: 2, w: 1, h: 1, stand: "horizontal", target: false },
    { i: "f", x: 0, y: 3, w: 2, h: 1, stand: "horizontal", target: false },
    { i: "h", x: 2, y: 1, w: 1, h: 2, stand: "vertical", target: false },
    { i: "j", x: 3, y: 0, w: 2, h: 1, stand: "horizontal", target: false },
    { i: "k", x: 3, y: 1, w: 2, h: 2, stand: "horizontal", target: true },
    { i: "l", x: 3, y: 3, w: 2, h: 1, stand: "horizontal", target: false },
  ];
  return (
    <div className="game-area" style={{ height: window.innerHeight / 1.5 }}>
      <ReactGridLayout
        className="layout"
        layout={layout}
        cols={5}
        items={20}
        rowHeight={window.innerHeight / 6.8}
        preventCollision={true}
        isResizable={false}
        verticalCompact={false}
      >
        {layout.map((item) => {
          return (
            <div
              className={
                item.target
                  ? "item-target"
                  : item.stand === "vertical"
                  ? "item-vertical"
                  : "item-horizontal"
              }
              key={item.i}
              onMouseDown={() => {}}
            ></div>
          );
        })}
      </ReactGridLayout>
    </div>
  );
};
