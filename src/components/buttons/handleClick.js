import { scroller } from 'react-scroll';
import { globals } from "../../data/globals";

export default function handleClick({ to = null, onClick = null, aLink = null, event = null }) {
  if (event) {
    event.preventDefault();
  }

  if (to) {
    scroller.scrollTo(to, {
      spy: true,
      smooth: true,
      offset: globals.ScrollLink.offset,
      duration: globals.ScrollLink.duration,
    });
  } else if (onClick) {
    onClick(event);
  } else if (aLink) {
    window.open(aLink, '_blank');
  }
}
