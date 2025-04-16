// https://hugeicons.com/icons?style=Stroke&type=Rounded
import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { darkTheme, lightTheme } from "../../constants/theme";

import Home from "./Home";
import Mail from "./Mail";
import Lock from "./Lock";
import User from "./User";
import Heart from "./Heart";
import Plus from "./Plus";
import Search from "./Search";
import Location from "./Location";
import Call from "./Call";
import Camera from "./Camera";
import Edit from "./Edit";
import ArrowLeft from "./ArrowLeft";
import ThreeDotsCircle from "./ThreeDotsCircle";
import ThreeDotsHorizontal from "./ThreeDotsHorizontal";
import Comment from "./Comment";
import Share from "./Share";
import Send from "./Send";
import Delete from "./Delete";
import Logout from "./logout";
import Image from "./Image";
import Video from "./Video";
import Library from "./Library";
import CheckList from "./CheckList";
import Bell from "./Bell";
import Chat from "./Chat";
import Calendar from "./Calendar";
import Alarm from "./Alarm";
import Bookmark from "./Bookmark";
import Laugh from "./Laugh";
import Album from "./Album";
import Save from "./Save";
import Cancel from "./Cancel";
import Multiple from "./Multiple";

const icons = {
  home: Home,
  mail: Mail,
  lock: Lock,
  user: User,
  heart: Heart,
  plus: Plus,
  search: Search,
  location: Location,
  call: Call,
  camera: Camera,
  edit: Edit,
  arrowLeft: ArrowLeft,
  threeDotsCircle: ThreeDotsCircle,
  threeDotsHorizontal: ThreeDotsHorizontal,
  comment: Comment,
  share: Share,
  send: Send,
  delete: Delete,
  logout: Logout,
  image: Image,
  video: Video,
  library: Library,
  checklist: CheckList,
  bell: Bell,
  chat: Chat,
  save: Save,
  cancel: Cancel,
  calendar: Calendar,
  alarm: Alarm,
  bookmark: Bookmark,
  laugh: Laugh,
  album: Album,
  multiple: Multiple,
};

const Icon = ({ name, ...props }) => {
  const IconComponent = icons[name];

  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <IconComponent
      height={props.size || 24}
      width={props.size || 24}
      strokeWidth={props.strokeWidth || 1.9}
      color={theme.colors.textLight}
      {...props}
    />
  );
};

export default Icon;
