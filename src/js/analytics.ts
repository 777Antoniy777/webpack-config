import * as $ from "jquery";

const createAnalytics = () => {
  let counter: number = 0;
  let isDestroyed: boolean = false;

  const handleDocumentClick = (): number => counter++;

  $(document).on('click', handleDocumentClick);

  return {
    destroy() {
      $(document).off('click', handleDocumentClick);
      isDestroyed = true;
    },
    getClicks() {
      if (isDestroyed) return 'Analitics is destroye';

      return counter;
    }
  };
};

window['analitics'] = createAnalytics();
