The Winton Group is building a new online store. They need a web application to keep track of their inventory. Use JavaScript to build them a simple version of an inventory system.

What they need is a user interface with two window panes. In one pane, put 5 text inputs marked A‐E. On the other pane, we should see the 5 input values, with the same labels, reflecting a cost markup of 25%.

The inventory system should work in two modes, called "single" and "multi". The user can switch modes using a toggle button. The current mode should be easy to visually identify.

When in "single" mode, every time an input is modified, only that input should be calculated and updated in the output pane.

When in "multi" mode, a "calculate all" button is visible. Clicking "calculate all" causes all inputs to be calculated and updated in the output pane at the same time. This should not require a form post. In "multi" mode, anytime an input has changed, but the calculate button has not been clicked yet, the output pane should somehow indicate that the calculations are no longer valid and need to be re‐run (could erase the output numbers, or grey them out, or any visual effect of your choice).

If any negative or non‐numeric values are entered in the input pane, the calculation result display should always be 0.

Whenever an calculation produces a result of over $1,000, that product is considered a special item. Its label and value must appear in bold, red font in the result display.

You can use any UI design you see fit, as long as the functionalities match the above requirements.
