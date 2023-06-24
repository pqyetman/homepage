import { animated, useSpring } from "@react-spring/web";

function TopHeader() {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 200,
      },
    });
  };

  return (
    <>
      <animated.h1
        onClick={handleClick}
        style={{
          width: 80,
          height: 80,
          background: "#ff6d6d",
          borderRadius: 8,
          zIndex: 2,
          position: "absolute",
          ...springs,
        }}
      >
        Test
      </animated.h1>

      <animated.div
        onClick={handleClick}
        style={{
          width: 80,
          height: 80,
          background: "#ff6d6d",
          borderRadius: 8,
          zIndex: 2,
       
          ...springs,
        }}
      />
    </>
  );
}

export default TopHeader;
