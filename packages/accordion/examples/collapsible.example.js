import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel
} from "@reach/accordion";
import "@reach/accordion/styles.css";

let name = "Collapsible";

/*
 * In this example, you should be able to collapse all of the accordion panels
 * at any given time.
 */

function Example() {
  return (
    <Accordion defaultIndex={1} collapsible>
      <AccordionItem>
        <AccordionTrigger>Here's some important context</AccordionTrigger>
        <AccordionPanel>
          Ante rhoncus facilisis iaculis nostra faucibus vehicula ac consectetur
          pretium, lacus nunc consequat id viverra facilisi ligula eleifend,
          congue gravida malesuada proin scelerisque luctus est convallis.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>You don't want to miss this</AccordionTrigger>
        <AccordionPanel>
          Ante rhoncus facilisis iaculis nostra faucibus vehicula ac consectetur
          pretium, lacus nunc consequat id viverra facilisi ligula eleifend,
          congue gravida malesuada proin scelerisque luctus est convallis.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Really cool teaser here!</AccordionTrigger>
        <AccordionPanel>
          Ante rhoncus facilisis iaculis nostra faucibus vehicula ac consectetur
          pretium, lacus nunc consequat id viverra facilisi ligula eleifend,
          congue gravida malesuada proin scelerisque luctus est convallis.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Don't forget me!</AccordionTrigger>
        <AccordionPanel>
          Ante rhoncus facilisis iaculis nostra faucibus vehicula ac consectetur
          pretium, lacus nunc consequat id viverra facilisi ligula eleifend,
          congue gravida malesuada proin scelerisque luctus est convallis.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

Example.story = { name };
export const Comp = Example;
export default { title: "Accordion" };
