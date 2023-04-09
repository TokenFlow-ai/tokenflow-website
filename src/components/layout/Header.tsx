import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./header.scss";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import transparentSVGFavicon from "../../assets/new_logo_transparent.png";
import { PopupButton } from "react-calendly";

type HeaderProps = {
  children?: React.ReactNode;
};

export const Header: React.FC<HeaderProps> = (): JSX.Element => {
  const isMobileHeader = useMediaQuery({ query: "(max-width: 1150px)" });

  const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
  });

  const SwipeableTemporaryDrawer: React.FC = (): JSX.Element => {
    const classes = useStyles();
    const [state, setState] = useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });

    const toggleDrawer = (anchor: any, open: any) => (event: any) => {
      if (
        event &&
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

    const list = (anchor: any) => (
      <div
        className={`${clsx(classes.list, {
          [classes.fullList]: anchor === "top" || anchor === "bottom",
        })} mobile-menu-container`}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List className="mobile-menu">
          <a href="/#why_us" className="nav-link">
            Why Us
          </a>
          <a href="/#our_services" className="nav-link">
            Our Services
          </a>
          <a href="/#faqs" className="nav-link">
            FAQs
          </a>
          <a
            href="mailto:contact@tokenflow.ai"
            rel="noopener noreferrer"
            target="_blank"
            className="nav-link"
          >
            Contact
          </a>
          <button
            className="btn shadow-btn header-btn mobile-header-btn"
            type="button"
            style={{
              width: "160px",
              marginLeft: "22px",
              marginTop: "10px",
            }}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://calendly.com/tokenflow"
              className="btn-link bold header-btn text-center bold"
              style={{ fontWeight: "bold", textAlign: "center", margin: "0" }}
            >
              Schedule a Call
            </a>
          </button>
        </List>
      </div>
    );

    const styles = {
      largeIcon: {
        width: 35,
        height: 35,
        position: "relative",
        bottom: 3,
      },
    };

    return (
      <div>
        {["right"].map((anchor: string) => (
          <React.Fragment key={anchor}>
            <Button
              style={{ backgroundColor: "#fafbfd" }}
              onClick={toggleDrawer(anchor, true)}
            >
              {/* @ts-ignore */}
              <MenuIcon style={styles.largeIcon} className="menu-icon" />
            </Button>
            <SwipeableDrawer
              anchor={"right"}
              /* @ts-ignore */
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className="navbar">
      {!isMobileHeader ? (
        <React.Fragment>
          <div className="logo">
            <a href="/#tokenflow">
              <img
                className="logo-img"
                src={transparentSVGFavicon}
                alt="TokenFlow"
                width="62"
                height="62.5"
              />
            </a>
          </div>
          <div className="nav-links">
            <a href="/#why_us" className="nav-link">
              Why Us
            </a>
            <a href="/#our_services" className="nav-link">
              Our Services
            </a>
            <a href="/#faqs" className="nav-link">
              FAQs
            </a>
            <a
              href="mailto:contact@tokenflow.ai"
              rel="noopener noreferrer"
              target="_blank"
              className="nav-link"
              style={{
                marginRight: "30px",
                marginLeft: "7px",
              }}
            >
              Contact
            </a>
            <PopupButton
              url="https://calendly.com/tokenflow"
              rootElement={document.getElementById("root") as HTMLElement}
              text="Schedule a Call"
              className="btn shadow-btn header-btn"
            />
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="logo logo-mobile">
            <Link to="/">
              <img
                className="logo-img logo-img-header"
                src={transparentSVGFavicon}
                alt="TokenFlow"
                width="72.5"
                height="72.5"
              />
            </Link>
          </div>
          <div className="swipeable-drawer-mobile">
            <SwipeableTemporaryDrawer />
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
