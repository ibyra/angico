declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    type StringNumber = `${number}`;

    type StringPercentage = `${number}%`;

    type BooleanString = `${boolean}`;

    type OptionalPostfixToken<T extends string> = ` ${T}` | '';

    type OptionalPrefixToken<T extends string> = `${T} ` | '';

    type Dir = 'ltr' | 'rtl' | 'auto';

    type XMLSpace = 'default' | 'preserve';

    interface GlobalAttributes {
      id?: string;
      style?: string;
      class?: string;
      lang?: string;
      tabindex?: StringNumber | number;
      autofocus?: boolean;
      inert?: boolean;
      part?: string;
      slot?: string;
      dir?: Dir;
      title?: string;
      ['xml:space']?: string;
    }

    interface DataAttributes {
      [data: `data-${string}`]: string | undefined;
    }

    interface GlobalEventHandlers {
      onabort?: string;
      onauxclick?: string;
      onbeforeinput?: string;
      onbeforematch?: string;
      onbeforetoggle?: string;
      onblur?: string;
      oncancel?: string;
      oncanplay?: string;
      oncanplaythrough?: string;
      onchange?: string;
      onclick?: string;
      onclose?: string;
      oncontextlost?: string;
      oncontextmenu?: string;
      oncontextrestored?: string;
      oncopy?: string;
      oncuechange?: string;
      oncut?: string;
      ondblclick?: string;
      ondrag?: string;
      ondragend?: string;
      ondragenter?: string;
      ondragleave?: string;
      ondragover?: string;
      ondragstart?: string;
      ondrop?: string;
      ondurationchange?: string;
      onemptied?: string;
      onended?: string;
      onerror?: string;
      onfocus?: string;
      onformdata?: string;
      oninput?: string;
      oninvalid?: string;
      onkeydown?: string;
      onkeypress?: string;
      onkeyup?: string;
      onload?: string;
      onloadeddata?: string;
      onloadedmetadata?: string;
      onloadstart?: string;
      onmousedown?: string;
      onmousemove?: string;
      onmouseout?: string;
      onmouseover?: string;
      onmouseup?: string;
      onpaste?: string;
      onpause?: string;
      onplay?: string;
      onplaying?: string;
      onprogress?: string;
      onratechange?: string;
      onreset?: string;
      onresize?: string;
      onscroll?: string;
      onscrollend?: string;
      onsecuritypolicyviolation?: string;
      onseeked?: string;
      onseeking?: string;
      onselect?: string;
      onslotchange?: string;
      onstalled?: string;
      onsubmit?: string;
      onsuspend?: string;
      ontimeupdate?: string;
      ontoggle?: string;
      onunload?: string;
      onvolumechange?: string;
      onwaiting?: string;
      onwebkitanimationend?: string;
      onwebkitanimationiteration?: string;
      onwebkitanimationstart?: string;
      onwebkittransitionend?: string;
      onwheel?: string;
    }

    type WAIARIARole =
      | 'alert'
      | 'alertdialog'
      | 'application'
      | 'article'
      | 'associationlist'
      | 'associationlistitemkey'
      | 'associationlistitemvalue'
      | 'banner'
      | 'blockquote'
      | 'button'
      | 'caption'
      | 'cell'
      | 'checkbox'
      | 'code'
      | 'columnheader'
      | 'combobox'
      | 'command'
      | 'comment'
      | 'complementary'
      | 'composite'
      | 'contentinfo'
      | 'definition'
      | 'deletion'
      | 'dialog'
      | 'directory'
      | 'document'
      | 'emphasis'
      | 'feed'
      | 'figure'
      | 'form'
      | 'generic'
      | 'grid'
      | 'gridcell'
      | 'group'
      | 'heading'
      | 'image'
      | 'img'
      | 'input'
      | 'insertion'
      | 'landmark'
      | 'link'
      | 'list'
      | 'listbox'
      | 'listitem'
      | 'log'
      | 'main'
      | 'mark'
      | 'marquee'
      | 'math'
      | 'menu'
      | 'menubar'
      | 'menuitem'
      | 'menuitemcheckbox'
      | 'menuitemradio'
      | 'meter'
      | 'navigation'
      | 'none'
      | 'note'
      | 'option'
      | 'paragraph'
      | 'presentation'
      | 'progressbar'
      | 'radio'
      | 'radiogroup'
      | 'range'
      | 'region'
      | 'roletype'
      | 'row'
      | 'rowgroup'
      | 'rowheader'
      | 'scrollbar'
      | 'search'
      | 'searchbox'
      | 'section'
      | 'sectionhead'
      | 'select'
      | 'separator'
      | 'slider'
      | 'spinbutton'
      | 'status'
      | 'strong'
      | 'structure'
      | 'subscript'
      | 'suggestion'
      | 'superscript'
      | 'switch'
      | 'tab'
      | 'table'
      | 'tablist'
      | 'tabpanel'
      | 'term'
      | 'textbox'
      | 'time'
      | 'timer'
      | 'toolbar'
      | 'tooltip'
      | 'tree'
      | 'treegrid'
      | 'treeitem'
      | 'widget'
      | 'window';

    interface WAIARIAAttributes {
      ['role']?: string;
      ['aria-activedescendant']?: string;
      ['aria-atomic']?: string;
      ['aria-autocomplete']?: string;
      ['aria-braillelabel']?: string;
      ['aria-brailleroledescription']?: string;
      ['aria-busy']?: string;
      ['aria-checked']?: string;
      ['aria-colcount']?: string;
      ['aria-colindex']?: string;
      ['aria-colindextext']?: string;
      ['aria-colspan']?: string;
      ['aria-controls']?: string;
      ['aria-current']?: string;
      ['aria-describedby']?: string;
      ['aria-description']?: string;
      ['aria-details']?: string;
      ['aria-disabled']?: string;
      ['aria-dropeffect']?: string;
      ['aria-errormessage']?: string;
      ['aria-expanded']?: string;
      ['aria-flowto']?: string;
      ['aria-grabbed']?: string;
      ['aria-haspopup']?: string;
      ['aria-hidden']?: string;
      ['aria-invalid']?: string;
      ['aria-keyshortcuts']?: string;
      ['aria-label']?: string;
      ['aria-labelledby']?: string;
      ['aria-level']?: string;
      ['aria-live']?: string;
      ['aria-modal']?: string;
      ['aria-multiline']?: string;
      ['aria-multiselectable']?: string;
      ['aria-orientation']?: string;
      ['aria-owns']?: string;
      ['aria-placeholder']?: string;
      ['aria-posinset']?: string;
      ['aria-pressed']?: string;
      ['aria-readonly']?: string;
      ['aria-relevant']?: string;
      ['aria-required']?: string;
      ['aria-roledescription']?: string;
      ['aria-rowcount']?: string;
      ['aria-rowindex']?: string;
      ['aria-rowindextext']?: string;
      ['aria-rowspan']?: string;
      ['aria-selected']?: string;
      ['aria-setsize']?: string;
      ['aria-sort']?: string;
      ['aria-valuemax']?: string;
      ['aria-valuemin']?: string;
      ['aria-valuenow']?: string;
      ['aria-valuetext']?: string;
    }
  }
}
