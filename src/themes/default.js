import tinycolor from "tinycolor2";

// rate
const lightenRate = 7.5;
const darkenRate = 15;

// base colors
const primary = "#45aaf2";
const secondary = "#0fb9b1";
const warning = "#f7b731";
const error = "#fc5c65";
const success = "#20bf6b";
const info = "#a55eea";

// background color
const background = tinycolor("#d1d8e0").lighten(15).toHexString();

// text colors
const textPrimary = "#4b6584";
const textSecondary = "#d1d8e0";
const textHint = tinycolor(textPrimary).lighten(lightenRate).toHexString();

export default {
    palette: {
        primary: {
            main: primary,
            light: tinycolor(primary).lighten(lightenRate).toHexString(),
            dark: tinycolor(primary).darken(darkenRate).toHexString(),
        },
        secondary: {
            main: secondary,
            light: tinycolor(secondary).lighten(lightenRate).toHexString(),
            dark: tinycolor(secondary).darken(darkenRate).toHexString(),
            contrastText: "#FFFFFF",
        },
        warning: {
            main: warning,
            light: tinycolor(warning).lighten(lightenRate).toHexString(),
            dark: tinycolor(warning).darken(darkenRate).toHexString(),
        },
        error: {
          main: error,
          light: tinycolor(error).lighten(lightenRate).toHexString(),
          dark: tinycolor(error).darken(darkenRate).toHexString(),
        },
        success: {
            main: success,
            light: tinycolor(success).lighten(lightenRate).toHexString(),
            dark: tinycolor(warning).darken(darkenRate).toHexString(),
        },
        info: {
            main: info,
            light: tinycolor(info).lighten(lightenRate).toHexString(),
            dark: tinycolor(warning).darken(darkenRate).toHexString(),
        },
        text: {
            primary: textPrimary,
            secondary: textSecondary,
            hint: textHint,
        },
        background: {
            default: background,
            light: tinycolor(background).lighten(lightenRate).toHexString(),
        },
    },

    customShadows: {
        widget:
        "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
        widgetDark:
        "0px 3px 18px 0px #8a8a8a, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
        widgetWide:
        "0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    },

    overrides: {
        MuiBackdrop: {
            root: {
              backgroundColor: "#4A4A4A1A",
            },
          },
          MuiMenu: {
            paper: {
              boxShadow:
                "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
            },
          },
          MuiSelect: {
            icon: {
              color: "#B9B9B9",
            },
          },
          MuiListItem: {
            root: {
              "&$selected": {
                backgroundColor: "#F3F5FF !important",
                "&:focus": {
                  backgroundColor: "#F3F5FF",
                },
              },
            },
            button: {
              "&:hover, &:focus": {
                backgroundColor: "#F3F5FF",
              },
            },
          },
          MuiTouchRipple: {
            child: {
              backgroundColor: "white",
            },
          },
          MuiTableRow: {
            root: {
              height: 56,
            },
          },
          MuiTableCell: {
            root: {
              borderBottom: "1px solid rgba(224, 224, 224, .5)",
            },
            head: {
              fontSize: "0.95rem",
            },
            body: {
              fontSize: "0.95rem",
            },
          },
    },
};
