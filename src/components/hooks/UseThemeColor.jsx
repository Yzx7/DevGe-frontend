

export const UseThemeColor = () => {

    const prevColor = useRef(document.querySelector('meta[name="theme-color"]'));

    useEffect(() => {
      const previousColor = prevColor.current;
      const metaColor = document.querySelector('meta[name="theme-color"]');
      if (colors) {
        metaColor.setAttribute("content", colors);
      }
      return () => {
        metaColor.setAttribute('content', previousColor)
      };
    }, [colors]);
}
