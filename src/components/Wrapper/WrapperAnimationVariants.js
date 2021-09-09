export const viewWrapperVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      when: "beforeChildren",
      duration: 0.5,
    },
  },
}

export const headerWrapperVariants = {
  hidden: { top: "-100%", opacity: 0 },
  visible: {
    top: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 700,
      damping: 60,
    },
  },
}

export const headerDesktopWrapperVariants = {
  hidden: { left: "-100%", opacity: 0 },
  visible: {
    left: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 700,
      damping: 60,
    },
  },
}
