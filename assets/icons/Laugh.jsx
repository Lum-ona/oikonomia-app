import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Laugh = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color="#000000"
    fill="none"
    {...props}
  >
    <Path
      d="M2 11C2.50421 5.94668 6.78892 2 12 2C17.2111 2 21.4958 5.94668 22 11M19 19.1752C17.1904 20.9235 14.7215 22 12 22C9.27848 22 6.80962 20.9235 5 19.1752"
      stroke="currentColor"
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 18C13.8962 18 15.4889 16.7202 15.9362 14.9899C16.1443 14.1848 15.8422 14 15.0461 14H8.95386C8.15776 14 7.8557 14.1848 8.0638 14.9899C8.51109 16.7202 10.1038 18 12 18Z"
      stroke="currentColor"
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 9.5C7 8.67157 7.67157 8 8.5 8C9.32843 8 10 8.67157 10 9.5M14 9.5C14 8.67157 14.6716 8 15.5 8C16.3284 8 17 8.67157 17 9.5"
      stroke="currentColor"
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6 12C4.44452 12.3985 1.54103 13.2338 2.06165 15.782C2.33013 17.0421 3.73652 17.275 4.5 16.708C6.33821 15.343 4.5 14 6 12Z"
      stroke="currentColor"
      strokeWidth={props.strokeWidth}
      strokeLinejoin="round"
    />
    <Path
      d="M18 12C19.5555 12.3985 22.459 13.2338 21.9383 15.782C21.6699 17.0421 20.2635 17.275 19.5 16.708C17.6618 15.343 19.5 14 18 12Z"
      stroke="currentColor"
      strokeWidth={props.strokeWidth}
      strokeLinejoin="round"
    />
  </Svg>
);

export default Laugh;
