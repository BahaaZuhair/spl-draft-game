(() => {
  "use strict";

  const phraseReplacements = [
    [/Each round, two roulettes land on a club and a season/gi, "Each round, two random draws select a club and a season"],
    [/Every round two roulettes decide/gi, "Every round two random draws decide"],
    [/Roulette lands on a club and a season/gi, "A random draw selects a club and a season"],
    [/the roulette lands on/gi, "the random draw selects"],
    [/The roulette only offers/gi, "The random draw only offers"],
    [/roulette wheel/gi, "random draw"],
    [/roulette picks/gi, "randomly drawn picks"],
    [/Whatever the roulette gives/gi, "Whatever the next random draw gives"],
    [/two roulettes/gi, "two random draws"],
    [/roulettes/gi, "random draws"],
    [/roulette/gi, "random draw"],
    [/العجلتان/g, "السحبان العشوائيان"],
    [/العجلة/g, "السحب العشوائي"],
  ];

  function saferCopy(value) {
    if (typeof value !== "string" || !value) return value;
    return phraseReplacements.reduce(
      (result, [pattern, replacement]) => result.replace(pattern, replacement),
      value
    );
  }

  function patchText(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let current;
    while ((current = walker.nextNode())) nodes.push(current);

    for (const node of nodes) {
      const parent = node.parentElement;
      if (!parent || parent.closest("script, style, noscript, textarea")) continue;
      const updated = saferCopy(node.nodeValue);
      if (updated !== node.nodeValue) node.nodeValue = updated;
    }

    if (root.querySelectorAll) {
      const elements = root.querySelectorAll("[title], [aria-label], [placeholder]");
      for (const element of elements) {
        for (const attribute of ["title", "aria-label", "placeholder"]) {
          if (!element.hasAttribute(attribute)) continue;
          const original = element.getAttribute(attribute);
          const updated = saferCopy(original);
          if (updated !== original) element.setAttribute(attribute, updated);
        }
      }
    }
  }

  let queued = false;
  function queuePatch() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      patchText(document.body);
    });
  }

  function start() {
    patchText(document.body);
    const observer = new MutationObserver(queuePatch);
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["title", "aria-label", "placeholder"],
    });
    window.addEventListener("load", queuePatch, { once: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
