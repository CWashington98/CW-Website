import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

const ScrollTest = () => {
  return (
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={Fade()}>
          <h1> test 1</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <div>
            <h1>TEST 2</h1>
            {/* <Profile /> */}
          </div>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default ScrollTest;
