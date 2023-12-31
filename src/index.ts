declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    // Base types

    type StringNumber = `${number}` | number;

    type StringPercentage = `${number}%`;

    type OptionalPostfixToken<T extends string> = ` ${T}` | '';

    type OptionalPrefixToken<T extends string> = `${T} ` | '';

    // HTML Enums

    type AutoFill =
      | AutoFillBase
      | `${OptionalPrefixToken<AutoFillSection>}${OptionalPrefixToken<AutoFillAddressKind>}${AutoFillField}${OptionalPostfixToken<AutoFillCredentialField>}`;
    type AutoFillField =
      | AutoFillNormalField
      | `${OptionalPrefixToken<AutoFillContactKind>}${AutoFillContactField}`;

    type AutoFillSection = `section-${string}`;

    type AutoFillAddressKind = 'billing' | 'shipping';

    type AutoFillBase = '' | 'off' | 'on';

    type AutoFillContactField =
      | 'email'
      | 'tel'
      | 'tel-area-code'
      | 'tel-country-code'
      | 'tel-extension'
      | 'tel-local'
      | 'tel-local-prefix'
      | 'tel-local-suffix'
      | 'tel-national';

    type AutoFillContactKind = 'home' | 'mobile' | 'work';

    type AutoFillCredentialField = 'webauthn';

    type AutoFillNormalField =
      | 'additional-name'
      | 'address-level1'
      | 'address-level2'
      | 'address-level3'
      | 'address-level4'
      | 'address-line1'
      | 'address-line2'
      | 'address-line3'
      | 'bday-day'
      | 'bday-month'
      | 'bday-year'
      | 'cc-csc'
      | 'cc-exp'
      | 'cc-exp-month'
      | 'cc-exp-year'
      | 'cc-family-name'
      | 'cc-given-name'
      | 'cc-name'
      | 'cc-number'
      | 'cc-type'
      | 'country'
      | 'country-name'
      | 'current-password'
      | 'family-name'
      | 'given-name'
      | 'honorific-prefix'
      | 'honorific-suffix'
      | 'name'
      | 'new-password'
      | 'one-time-code'
      | 'organization'
      | 'postal-code'
      | 'street-address'
      | 'transaction-amount'
      | 'transaction-currency'
      | 'username';

    type AutoCapitalize =
      | 'off'
      | 'on'
      | 'none'
      | 'sentences'
      | 'words'
      | 'characters';

    type Blocking = 'render';

    type ButtonType = 'submit' | 'reset' | 'button';

    type ContentEditable = '' | 'true' | 'plaintext-only' | 'false';

    type CrossOrigin = '' | ' anonymous' | 'use-credentials';

    type Decoding = 'sync' | 'async' | 'auto';

    type Destination =
      | 'audio'
      | 'audioworklet'
      | 'document'
      | 'embed'
      | 'font'
      | 'frame'
      | 'iframe'
      | 'image'
      | 'manifest'
      | 'object'
      | 'paintworklet'
      | 'report'
      | 'script'
      | 'serviceworker'
      | 'sharedworker'
      | 'style'
      | 'track'
      | 'video'
      | 'webidentity'
      | 'worker'
      | 'xslt';

    type Dir = 'ltr' | 'rtl' | 'auto';

    type Draggable = 'true' | 'false';

    type EncriptionType =
      | 'application/x-www-form-urlencoded'
      | 'multipart/form-data'
      | 'text/plain';

    type EnterKeyHint =
      | 'enter'
      | 'done'
      | 'go'
      | 'next'
      | 'previous'
      | 'search'
      | 'send';

    type FetchPriority = 'high' | 'low' | 'auto';

    type Hidden = '' | 'hidden' | 'until-found';

    type HttpEquiv =
      | 'content-language'
      | 'content-type'
      | 'default-style'
      | 'refresh'
      | 'set-cookie'
      | 'x-ua-compatible'
      | 'policy';

    type InputMode =
      | 'none'
      | 'text'
      | 'tel'
      | 'url'
      | 'email'
      | 'numeric'
      | 'decimal'
      | 'search';

    type Loading = 'eager' | 'lazy';

    type Method = 'GET' | 'POST' | 'dialog';

    type PopoverTargetAction = 'toggle' | 'show' | 'hide';

    type PreLoad = 'none' | 'metadata' | 'auto';

    type PotentialDestination = '' | 'fetch' | Destination;

    type ReferrerPolicy =
      | ''
      | 'no-referrer'
      | 'no-referrer-when-downgrade'
      | 'same-origin'
      | 'origin'
      | 'strict-origin'
      | 'origin-when-cross-origin'
      | 'strict-origin-when-cross-origin'
      | 'unsafe-url';

    type Rel =
      | 'alternate'
      | 'canonical'
      | 'author'
      | 'bookmark'
      | 'dns'
      | 'external'
      | 'help'
      | 'icon'
      | 'manifest'
      | 'modulepreload'
      | 'license'
      | 'next'
      | 'nofollow'
      | 'noopener'
      | 'noreferrer'
      | 'opener'
      | 'pingback'
      | 'preconnect'
      | 'prefetch'
      | 'preload'
      | 'prev'
      | 'search'
      | 'stylesheet'
      | 'tag';

    type RelAnchor = Exclude<
      Rel,
      | 'canonical'
      | 'dns-prefetch'
      | 'icon'
      | 'manifest'
      | 'manifest'
      | 'modulepreload'
      | 'pingback'
      | 'preconnect'
      | 'prefetch'
      | 'preload'
      | 'stylesheet'
    >;

    type RelForm = Exclude<
      Rel,
      | 'canonical'
      | 'dns-prefetch'
      | 'icon'
      | 'manifest'
      | 'manifest'
      | 'modulepreload'
      | 'pingback'
      | 'preconnect'
      | 'prefetch'
      | 'preload'
      | 'stylesheet'
      | 'tag'
    >;

    type RelLink = Exclude<
      Rel,
      | 'bookmark'
      | 'external'
      | 'nofollow'
      | 'noopener'
      | 'noreferrer'
      | 'opener'
      | 'tag'
    >;

    type Sandbox =
      | 'allow-downloads'
      | 'allow-forms'
      | 'allow-modals'
      | 'allow-orientation-lock'
      | 'allow-pointer-lock'
      | 'allow-popups'
      | 'allow-popups-to-escape-sandbox'
      | 'allow-presentation'
      | 'allow-same-origin'
      | 'allow-scripts'
      | 'allow-top-navigation'
      | 'allow-top-navigation-by-user-activation'
      | 'allow-top-navigation-to-custom-protocols';

    type SpellCheck = '' | 'true' | 'false';

    type TableHeaderScope = 'row' | 'col' | 'rowgroup' | 'colgroup';

    type Target = '_blank' | '_self' | '_parent' | '_top';

    type TextAreaWrap = 'soft' | 'hard';

    type Translate = '' | 'yes' | 'no';

    type TrackKind =
      | 'subtitles'
      | 'captions'
      | 'descriptions'
      | 'chapters'
      | 'metadata';

    type VirtualKeyboardPolicy = '' | 'auto' | 'manual';

    // HTML Interfaces

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
      onvolumechange?: string;
      onwaiting?: string;
      onwebkitanimationend?: string;
      onwebkitanimationiteration?: string;
      onwebkitanimationstart?: string;
      onwebkittransitionend?: string;
      onwheel?: string;
    }

    interface HTMLAttributes extends GlobalEventHandlers {
      [aria: `aria-${string}`]: string | boolean | undefined | null;
      [data: `data-${string}`]: string | boolean | undefined | null;
      accesskey?: string;
      autocapitalize?: AutoCapitalize;
      autofocus?: boolean;
      class?: string;
      contenteditable?: boolean | ContentEditable;
      dir?: Dir;
      draggable?: Draggable;
      enterkeyhint?: EnterKeyHint;
      hidden?: boolean | Hidden;
      id?: string;
      inert?: boolean;
      inputmode?: InputMode;
      itemid?: string;
      itemref?: string;
      itemscope?: boolean;
      itemtype?: string;
      lang?: string;
      nonce?: string;
      part?: string;
      popover?: boolean | 'manual' | 'auto';
      role?: string;
      slot?: string;
      spellcheck?: SpellCheck;
      style?: string;
      tabindex?: StringNumber;
      title?: string;
      translate?: Translate;
      virtualkeyboardpolicy?: VirtualKeyboardPolicy;
    }

    interface HTMLAnchorAttributes extends HTMLAttributes {
      download?: string;
      href?: string;
      hreflang?: string;
      ping?: string;
      referrerpolicy?: ReferrerPolicy;
      rel?: RelAnchor;
      target?: Target;
      type?: string;
    }

    interface HTMLMediaAttributes extends HTMLAttributes {
      autoplay?: boolean;
      controls?: boolean;
      crossorigin?: CrossOrigin;
      loop?: boolean;
      muted?: boolean;
      preload?: PreLoad;
      src?: string;
    }

    interface HTMLOpenableAttributes extends HTMLAttributes {
      open?: boolean;
    }

    interface HTMLFormListedAttributes extends HTMLAttributes {
      disabled?: boolean;
      form?: string;
      name?: string;
    }

    interface HTMLFormSubmittableAttributes extends HTMLFormListedAttributes {
      formaction?: string;
      formenctype?: EncriptionType;
      formmethod?: Method;
      formnovalidate?: boolean;
      formtarget?: Target;
    }

    interface HTMLInputHiddenAttributes extends HTMLFormListedAttributes {
      autocomplete?: AutoFill;
      dirname?: string;
      type: 'hidden';
      value?: string;
    }

    interface HTMLInputTextSearchAttributes extends HTMLFormListedAttributes {
      autocomplete?: AutoFill;
      dirname?: string;
      list?: string;
      maxlength?: StringNumber;
      minlength?: StringNumber;
      pattern?: string;
      placeholder?: string;
      readonly?: boolean;
      required?: boolean;
      size?: StringNumber;
      type: 'text' | 'search';
      value?: string;
    }

    interface HTMLInputTelephoneURLAttributes extends HTMLFormListedAttributes {
      autocomplete?: AutoFill;
      dirname?: string;
      list?: string;
      maxlength?: StringNumber;
      minlength?: StringNumber;
      pattern?: string;
      placeholder?: string;
      readonly?: boolean;
      required?: boolean;
      size?: StringNumber;
      type: 'tel' | 'url';
      value?: string;
    }

    interface HTMLInputEmailAttributes extends HTMLFormListedAttributes {
      autocomplete?: AutoFill;
      dirname?: string;
      list?: string;
      maxlength?: StringNumber;
      minlength?: StringNumber;
      multiple?: boolean;
      pattern?: string;
      placeholder?: string;
      readonly?: boolean;
      required?: boolean;
      size?: StringNumber;
      type: 'email';
      value?: string;
    }

    interface HTMLInputPasswordAttributes extends HTMLFormListedAttributes {
      autocomplete?: AutoFill;
      maxlength?: StringNumber;
      minlength?: StringNumber;
      pattern?: string;
      placeholder?: string;
      readonly?: boolean;
      required?: boolean;
      size?: StringNumber;
      type: 'password';
      value?: string;
    }

    interface HTMLInputDateMonthWeekTimeAttributes
      extends HTMLFormListedAttributes {
      autocomplete?: AutoFill;
      list?: string;
      max?: string;
      min?: string;
      readonly?: boolean;
      required?: boolean;
      step?: string;
      type: 'date' | 'month' | 'week' | 'time';
      value?: string;
    }

    interface HTMLInputDateTimeLocalAttributes
      extends HTMLFormListedAttributes {
      autocomplete?: AutoFill;
      list?: string;
      max?: string;
      min?: string;
      readonly?: boolean;
      required?: boolean;
      step?: string;
      type: 'datetime-local';
      value?: string;
    }

    interface HTMLInputNumberAttributes extends HTMLFormListedAttributes {
      autocomplete?: AutoFill;
      list?: string;
      max?: string;
      min?: string;
      placeholder?: string;
      readonly?: boolean;
      required?: boolean;
      step?: string;
      type: 'number';
      value?: string;
    }

    interface HTMLInputRangeAttributes extends HTMLFormListedAttributes {
      autocomplete?: AutoFill;
      list?: string;
      max?: string;
      min?: string;
      step?: string;
      type: 'range';
      value?: string;
    }

    interface HTMLInputColorAttributes extends HTMLFormListedAttributes {
      autocomplete?: AutoFill;
      list?: string;
      type: 'color';
      value?: string;
    }

    interface HTMLInputCheckboxRadioAttributes
      extends HTMLFormListedAttributes {
      autocomplete?: AutoFill;
      checked?: boolean;
      required?: boolean;
      type: 'checkbox' | 'radio';
      value?: string;
    }

    interface HTMLInputFileAttributes extends HTMLFormListedAttributes {
      accept?: string;
      multiple?: boolean;
      required?: boolean;
      type: 'file';
      value?: string;
    }

    interface HTMLInputSubmitAttributes extends HTMLFormSubmittableAttributes {
      popovertarget?: string;
      popovertargetaction?: PopoverTargetAction;
      type: 'submit';
      value?: string;
    }

    interface HTMLInputImageAttributes extends HTMLFormSubmittableAttributes {
      alt?: string;
      height?: StringNumber;
      popovertarget?: string;
      popovertargetaction?: PopoverTargetAction;
      src?: string;
      type: 'image';
      value?: string;
      width?: StringNumber;
    }

    interface HTMLInputResetButtonAttributes extends HTMLFormListedAttributes {
      popovertarget?: string;
      popovertargetaction?: PopoverTargetAction;
      type: 'button' | 'reset';
      value?: string;
    }

    interface HTMLModAttributes extends HTMLAttributes {
      cite?: string;
      datetime?: string;
    }

    interface HTMLTableColumnAttributes extends HTMLAttributes {
      span?: StringNumber;
    }

    // HTML Tags

    interface HTMLATag extends HTMLAnchorAttributes {}

    interface HTMLAbbrTag extends HTMLAttributes {}

    interface HTMLAddressTag extends HTMLAttributes {}

    interface HTMLAreaTag extends HTMLAnchorAttributes {
      alt?: string;
      coords?: string;
      shape?: string;
    }

    interface HTMLArticleTag extends HTMLAttributes {}

    interface HTMLAsideTag extends HTMLAttributes {}

    interface HTMLAudioTag extends HTMLMediaAttributes {
      disableremoteplayback?: boolean;
    }

    interface HTMLBTag extends HTMLAttributes {}

    interface HTMLBaseTag extends HTMLAttributes {
      href?: string;
      target?: Target;
    }

    interface HTMLBdiTag extends HTMLAttributes {}

    interface HTMLBdoTag extends HTMLAttributes {
      dir?: Exclude<Dir, 'auto'>;
    }

    interface HTMLBlockquoteTag extends HTMLAttributes {
      cite?: string;
    }

    interface HTMLBodyTag extends HTMLAttributes {}

    interface HTMLBrTag extends HTMLAttributes {}

    interface HTMLButtonTag extends HTMLFormSubmittableAttributes {
      popovertarget?: string;
      popovertargetaction?: PopoverTargetAction;
      type?: ButtonType;
      value?: string;
    }

    interface HTMLCanvasTag extends HTMLAttributes {
      height?: StringNumber;
      width?: StringNumber;
    }

    interface HTMLCaptionTag extends HTMLAttributes {}

    interface HTMLCiteTag extends HTMLAttributes {}

    interface HTMLCodeTag extends HTMLAttributes {}

    interface HTMLColTag extends HTMLTableColumnAttributes {}

    interface HTMLColGroupTag extends HTMLTableColumnAttributes {}

    interface HTMLDataTag extends HTMLAttributes {
      value?: string;
    }

    interface HTMLDataListTag extends HTMLAttributes {}

    interface HTMLDdTag extends HTMLAttributes {}

    interface HTMLDelTag extends HTMLModAttributes {}

    interface HTMLDetailsTag extends HTMLOpenableAttributes {}

    interface HTMLDfnTag extends HTMLAttributes {}

    interface HTMLDialogTag extends HTMLOpenableAttributes {}

    interface HTMLDivTag extends HTMLAttributes {}

    interface HTMLDlTag extends HTMLAttributes {}

    interface HTMLDtTag extends HTMLAttributes {}

    interface HTMLEmTag extends HTMLAttributes {}

    interface HTMLEmbedTag extends HTMLAttributes {
      height?: StringNumber;
      width?: StringNumber;
      src?: string;
      type?: string;
    }

    interface HTMLFieldsetTag extends HTMLFormListedAttributes {}

    interface HTMLFigCaptionTag extends HTMLAttributes {}

    interface HTMLFigureTag extends HTMLAttributes {}

    interface HTMLFooterTag extends HTMLAttributes {}

    interface HTMLFormTag extends HTMLAttributes {
      ['accept-charset']?: string;
      action?: string;
      autocomplete?: AutoFill;
      enctype?: EncriptionType;
      method?: Method;
      name?: string;
      novalidate?: boolean;
      rel?: RelForm;
      target?: Target;
    }

    interface HTMLH1Tag extends HTMLAttributes {}

    interface HTMLH2Tag extends HTMLAttributes {}

    interface HTMLH3Tag extends HTMLAttributes {}

    interface HTMLH4Tag extends HTMLAttributes {}

    interface HTMLH5Tag extends HTMLAttributes {}

    interface HTMLH6Tag extends HTMLAttributes {}

    interface HTMLHeadTag extends HTMLAttributes {}

    interface HTMLHeaderTag extends HTMLAttributes {}

    interface HTMLHGroupTag extends HTMLAttributes {}

    interface HTMLHrTag extends HTMLAttributes {}

    interface HTMLHtmlTag extends HTMLAttributes {
      xmls?: string;
    }

    interface HTMLITag extends HTMLAttributes {}

    interface HTMLIFrameTag extends HTMLAttributes {
      allow?: string;
      allowfullscreen?: boolean;
      height?: StringNumber;
      loading?: Loading;
      name?: string;
      referrerpolicy?: ReferrerPolicy;
      sandbox?: Sandbox;
      src?: string;
      srcdoc?: string;
      width?: StringNumber;
    }

    interface HTMLImgTag extends HTMLAttributes {
      alt?: string;
      crossorigin?: CrossOrigin;
      decoding?: Decoding;
      fetchpriority?: FetchPriority;
      height?: StringNumber;
      ismap?: boolean;
      loading?: Loading;
      referrerpolicy?: ReferrerPolicy;
      sizes?: string;
      src?: string;
      srcset?: string;
      usemap?: string;
      width?: StringNumber;
    }

    type HTMLInputTag =
      | HTMLInputHiddenAttributes
      | HTMLInputTextSearchAttributes
      | HTMLInputTelephoneURLAttributes
      | HTMLInputEmailAttributes
      | HTMLInputPasswordAttributes
      | HTMLInputDateMonthWeekTimeAttributes
      | HTMLInputDateTimeLocalAttributes
      | HTMLInputNumberAttributes
      | HTMLInputRangeAttributes
      | HTMLInputColorAttributes
      | HTMLInputCheckboxRadioAttributes
      | HTMLInputFileAttributes
      | HTMLInputSubmitAttributes
      | HTMLInputImageAttributes
      | HTMLInputResetButtonAttributes;

    interface HTMLInsTag extends HTMLModAttributes {}

    interface HTMLKbdTag extends HTMLAttributes {}

    interface HTMLLabelTag extends HTMLAttributes {
      for?: string;
    }

    interface HTMLLegendTag extends HTMLAttributes {}

    interface HTMLLiTag extends HTMLAttributes {
      value?: StringNumber;
    }

    interface HTMLLinkTag extends HTMLAttributes {
      action?: PotentialDestination;
      blocking?: Blocking;
      crossorigin?: CrossOrigin;
      fetchpriority?: FetchPriority;
      href?: string;
      hreflang?: string;
      imagesizes?: string;
      imagesrcset?: string;
      integrity?: string;
      media?: string;
      referrerpolicy?: ReferrerPolicy;
      rel?: RelLink;
      sizes?: string;
      type?: string;
    }

    interface HTMLMainTag extends HTMLAttributes {}

    interface HTMLMapTag extends HTMLAttributes {
      name?: string;
    }

    interface HTMLMarkTag extends HTMLAttributes {}

    interface HTMLMenuTag extends HTMLAttributes {}

    interface HTMLMetaTag extends HTMLAttributes {
      'charset'?: string;
      'content'?: string;
      'http-equiv'?: HttpEquiv;
      'name'?: string;
    }

    interface HTMLMeterTag extends HTMLAttributes {
      high?: StringNumber;
      low?: StringNumber;
      max?: StringNumber;
      min?: StringNumber;
      optimum?: StringNumber;
      value?: StringNumber;
    }

    interface HTMLNavTag extends HTMLAttributes {}

    interface HTMLNoScriptTag extends HTMLAttributes {}

    interface HTMLObjectTag extends HTMLAttributes {
      data?: string;
      form?: string;
      height?: StringNumber;
      name?: string;
      type?: string;
      usemap?: string;
      width?: StringNumber;
    }

    interface HTMLOlTag extends HTMLAttributes {
      reversed?: boolean;
      start?: StringNumber;
    }

    interface HTMLOptGroupTag extends HTMLAttributes {
      disabled?: boolean;
      label?: string;
    }

    interface HTMLOptionTag extends HTMLAttributes {
      disabled?: boolean;
      label?: string;
      selected?: boolean;
      value?: string;
    }

    interface HTMLOutputTag extends HTMLAttributes {
      for?: string;
      form?: string;
      name: string;
    }

    interface HTMLPTag extends HTMLAttributes {}

    interface HTMLPictureTag extends HTMLAttributes {}

    interface HTMLPortalTag extends HTMLAttributes {
      referrerpolicy: ReferrerPolicy;
      src?: string;
    }

    interface HTMLPreTag extends HTMLAttributes {}

    interface HTMLProgressTag extends HTMLAttributes {
      max?: StringNumber;
      value?: StringNumber;
    }

    interface HTMLQTag extends HTMLAttributes {
      cite?: string;
    }

    interface HTMLRpTag extends HTMLAttributes {}

    interface HTMLRtTag extends HTMLAttributes {}

    interface HTMLRubyTag extends HTMLAttributes {}

    interface HTMLSTag extends HTMLAttributes {}

    interface HTMLSampTag extends HTMLAttributes {}

    interface HTMLScriptTag extends HTMLAttributes {
      async?: boolean;
      blocking?: Blocking;
      crossorigin?: CrossOrigin;
      defer?: boolean;
      fetchpriority?: FetchPriority;
      importmap?: boolean;
      integrity?: string;
      module?: boolean;
      nomodule?: boolean;
      nonce?: string;
      referrerpolicy?: ReferrerPolicy;
      src?: string;
      type?: string;
    }

    interface HTMLSearchTag extends HTMLAttributes {}

    interface HTMLSectionTag extends HTMLAttributes {}

    interface HTMLSelectTag extends HTMLFormListedAttributes {
      autocomplete?: AutoFill;
      autofocus?: boolean;
      multiple?: boolean;
      required?: boolean;
      size?: StringNumber;
    }

    interface HTMLSlotTag extends HTMLAttributes {
      name?: string;
    }

    interface HTMLSmallTag extends HTMLAttributes {}

    interface HTMLSourceTag extends HTMLAttributes {
      height?: StringNumber;
      media?: string;
      sizes?: string;
      src?: string;
      srcset?: string;
      type?: string;
      width?: StringNumber;
    }

    interface HTMLSpanTag extends HTMLAttributes {}

    interface HTMLStrongTag extends HTMLAttributes {}

    interface HTMLStyleTag extends HTMLAttributes {
      blocking?: Blocking;
      media?: string;
      nonce?: string;
    }

    interface HTMLSubTag extends HTMLAttributes {}

    interface HTMLSummaryTag extends HTMLAttributes {}

    interface HTMLSupTag extends HTMLAttributes {}

    interface HTMLTableTag extends HTMLAttributes {}

    interface HTMLTbodyTag extends HTMLAttributes {}

    interface HTMLTdTag extends HTMLAttributes {
      colspan?: StringNumber;
      headers?: string;
      rowspan?: StringNumber;
    }

    interface HTMLTemplateTag extends HTMLAttributes {
      shadowrootmode?: 'open' | 'closed';
    }

    interface HTMLTextareaTag extends HTMLFormListedAttributes {
      autocomplete?: AutoFill;
      autofocus?: boolean;
      cols?: StringNumber;
      dirname?: string;
      maxlength?: StringNumber;
      minlength?: StringNumber;
      placeholder?: string;
      readonly?: boolean;
      required?: boolean;
      rows?: StringNumber;
      wrap?: TextAreaWrap;
    }

    interface HTMLTFootTag extends HTMLAttributes {}

    interface HTMLThTag extends HTMLAttributes {
      abbr?: string;
      colspan?: StringNumber;
      headers: string;
      rowspan?: StringNumber;
      scope: TableHeaderScope;
    }

    interface HTMLTheadTag extends HTMLAttributes {}

    interface HTMLTimeTag extends HTMLAttributes {
      datetime?: string;
    }

    interface HTMLTitleTag extends HTMLAttributes {}

    interface HTMLTrTag extends HTMLAttributes {}

    interface HTMLTrackTag extends HTMLAttributes {
      default?: boolean;
      kind?: TrackKind;
      label?: string;
      src?: string;
      srclang?: string;
    }

    interface HTMLUTag extends HTMLAttributes {}

    interface HTMLUlTag extends HTMLAttributes {}

    interface HTMLVarTag extends HTMLAttributes {}

    interface HTMLVideoTag extends HTMLMediaAttributes {
      disablepictureinpicture?: boolean;
      disableremoteplayback?: boolean;
      height?: StringNumber;
      playsinline?: boolean;
      poster?: string;
      width?: StringNumber;
    }

    interface HTMLWbrTag extends HTMLAttributes {}

    interface HTMLTagMap {
      a: HTMLATag;
      abbr: HTMLAbbrTag;
      address: HTMLAddressTag;
      area: HTMLAreaTag;
      article: HTMLArticleTag;
      aside: HTMLAsideTag;
      audio: HTMLAudioTag;
      b: HTMLBTag;
      base: HTMLBaseTag;
      bdi: HTMLBdiTag;
      bdo: HTMLBdoTag;
      blockquote: HTMLBlockquoteTag;
      body: HTMLBodyTag;
      br: HTMLBrTag;
      button: HTMLButtonTag;
      canvas: HTMLCanvasTag;
      caption: HTMLCaptionTag;
      cite: HTMLCiteTag;
      code: HTMLCodeTag;
      col: HTMLColTag;
      colgroup: HTMLColGroupTag;
      data: HTMLDataTag;
      datalist: HTMLDataListTag;
      dd: HTMLDdTag;
      del: HTMLDelTag;
      details: HTMLDetailsTag;
      dfn: HTMLDfnTag;
      dialog: HTMLDialogTag;
      div: HTMLDivTag;
      dl: HTMLDlTag;
      dt: HTMLDtTag;
      em: HTMLEmTag;
      embed: HTMLEmbedTag;
      fieldset: HTMLFieldsetTag;
      figcaption: HTMLFigCaptionTag;
      figure: HTMLFigureTag;
      footer: HTMLFooterTag;
      form: HTMLFormTag;
      h1: HTMLH1Tag;
      h2: HTMLH2Tag;
      h3: HTMLH3Tag;
      h4: HTMLH4Tag;
      h5: HTMLH5Tag;
      h6: HTMLH6Tag;
      head: HTMLHeadTag;
      header: HTMLHeaderTag;
      hgroup: HTMLHGroupTag;
      hr: HTMLHrTag;
      html: HTMLHtmlTag;
      i: HTMLITag;
      iframe: HTMLIFrameTag;
      img: HTMLImgTag;
      input: HTMLInputTag;
      ins: HTMLInsTag;
      kbd: HTMLKbdTag;
      label: HTMLLabelTag;
      legend: HTMLLegendTag;
      li: HTMLLiTag;
      link: HTMLLinkTag;
      main: HTMLMainTag;
      map: HTMLMapTag;
      mark: HTMLMarkTag;
      menu: HTMLMenuTag;
      meta: HTMLMetaTag;
      meter: HTMLMeterTag;
      nav: HTMLNavTag;
      noscript: HTMLNoScriptTag;
      object: HTMLObjectTag;
      ol: HTMLOlTag;
      optgroup: HTMLOptGroupTag;
      option: HTMLOptionTag;
      output: HTMLOutputTag;
      p: HTMLPTag;
      picture: HTMLPictureTag;
      portal: HTMLPortalTag;
      pre: HTMLPreTag;
      progress: HTMLProgressTag;
      q: HTMLQTag;
      rp: HTMLRpTag;
      rt: HTMLRtTag;
      ruby: HTMLRubyTag;
      s: HTMLSTag;
      samp: HTMLSampTag;
      script: HTMLScriptTag;
      search: HTMLSearchTag;
      section: HTMLSectionTag;
      select: HTMLSelectTag;
      slot: HTMLSlotTag;
      small: HTMLSmallTag;
      source: HTMLSourceTag;
      span: HTMLSpanTag;
      strong: HTMLStrongTag;
      style: HTMLStyleTag;
      sub: HTMLSubTag;
      summary: HTMLSummaryTag;
      sup: HTMLSupTag;
      table: HTMLTableTag;
      tbody: HTMLTbodyTag;
      td: HTMLTdTag;
      template: HTMLTemplateTag;
      textarea: HTMLTextareaTag;
      tfoot: HTMLTFootTag;
      th: HTMLThTag;
      thead: HTMLTheadTag;
      time: HTMLTimeTag;
      title: HTMLTimeTag;
      tr: HTMLTrTag;
      track: HTMLTrackTag;
      u: HTMLUTag;
      ul: HTMLUlTag;
      var: HTMLVarTag;
      video: HTMLVideoTag;
      wbr: HTMLWbrTag;
    }

    interface SVGAttributes extends GlobalEventHandlers {
      [aria: `aria-${string}`]: string | boolean | undefined | null;
      [data: `data-${string}`]: string | boolean | undefined | null;
      id?: string;
      lang?: string;
      role?: string;
      tabindex?: StringNumber;
      inert?: boolean;
      slot?: string;
    }

    interface SVGStylingAttributes {
      class?: string;
      style?: string;
    }

    interface SVGPresentationAttributes {
      clipPath?: string;
      clipRule?: 'nonzero' | 'evenodd' | 'inherit';
      color?: string;
      colorInterpolation?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit';
      colorRendering?: 'auto' | 'optimizeSpeed' | 'optimizeQuality' | 'inherit';
      cursor?: string;
      display?: string;
      fill?: string;
      fillOpacity?: StringNumber | StringPercentage;
      fillRule?: 'nonzero' | 'evenodd' | 'inherit';
      filter?: string;
      mask?: string;
      opacity?: StringNumber;
      pointerEvents?:
        | 'bounding-box'
        | 'visiblePainted'
        | 'visibleFill'
        | 'visibleStroke'
        | 'visible'
        | 'painted'
        | 'fill'
        | 'stroke'
        | 'all'
        | 'none';
      shapeRendering?:
        | 'auto'
        | 'optimizeSpeed'
        | 'crispEdges'
        | 'geometricPrecision'
        | 'inherit';
      stroke?: string;
      strokeDasharray?: string;
      strokeDashoffset?: string;
      strokeLinecap?: string;
      strokeLinejoin?: string;
      strokeMiterlimit?: string;
      strokeOpacity?: string;
      strokeWidth?: string;
      transform?: string;
      vectorEffect?: string;
      visibility?: 'visible' | 'hidden' | 'collapse' | 'inherit';
    }

    interface SVGSVGTag
      extends SVGAttributes,
        SVGStylingAttributes,
        SVGPresentationAttributes {
      height?: string;
      width?: string;
      viewBox?: string;
      preserveAspectRatio?: string;
      x?: string;
      y?: string;
    }

    interface SVGRectTag
      extends SVGAttributes,
        SVGStylingAttributes,
        SVGPresentationAttributes {
      height?: string;
      width?: string;
      x?: string;
      y?: string;
      rx?: string;
      ry?: string;
      pathLength?: string;
    }

    interface SVGPathTag
      extends SVGAttributes,
        SVGStylingAttributes,
        SVGPresentationAttributes {
      d?: string;
      pathLength?: StringNumber;
    }

    interface SVGGTag
      extends SVGAttributes,
        SVGStylingAttributes,
        SVGPresentationAttributes {}

    interface SVGTagMap {
      g: SVGGTag;
      path: SVGPathTag;
      svg: SVGSVGTag;
      rect: SVGRectTag;
    }

    interface IntrinsicElements extends HTMLTagMap, SVGTagMap {}

    type Value =
      | string
      | boolean
      | number
      | bigint
      | Date
      | null
      | undefined
      | Iterable<Value>
      | Promise<
          | string
          | boolean
          | number
          | bigint
          | Date
          | null
          | undefined
          | Iterable<Value>
        >;

    type Child = Value | Element;

    type Children = Array<Child>;

    type FragmentElement = {
      children: Children;
      render(): Promise<string>;
    };

    type FunctionElement = {
      children: Children;
      props: Record<string, unknown>;
      function: (props: Record<string, unknown>) => Element;
      render(): Promise<string>;
    };

    type IntrinsicElement = {
      children: Children;
      props: Record<string, JSX.Value>;
      tag: string;
      render(): Promise<string>;
    };

    type SyncElement = FragmentElement | FunctionElement | IntrinsicElement;

    type AsyncElement = Promise<SyncElement>;

    type Element = SyncElement | AsyncElement;
  }
}

/**
 * Represents a functional component that take some props as input and returns
 * a `JSX.Element`.
 **/
// eslint-disable-next-line @typescript-eslint/ban-types
export type FC<P extends Record<string, unknown> = {}> = (
  props: P,
) => JSX.Element;

/**
 * Creates an `JSX.Element`.
 *
 * @param tag The JSX tag of the element
 * @param properties The properties of the JSX element
 * @param children The children of the JSX element.
 */
export function createElement(
  tag: string | FC,
  properties: Record<string, JSX.Value> | Record<string, unknown>,
  ...children: JSX.Children
): JSX.Element {
  if (typeof tag === 'string') {
    const props = (properties ?? {}) as Record<string, JSX.Value>;
    return new IntrinsicElement(props, children, tag);
  }

  if (typeof tag === 'function') {
    const props = (properties ?? {}) as Record<string, unknown>;
    if (tag === Fragment) return Fragment({ children });
    return new FunctionElement(props, children, tag);
  }

  const message = `Invalid JSX Element: it must be a tag (string) or a component (function).`;
  throw new TypeError(message);
}

/**
 * Creates an `JSX.FragmentElement`.
 *
 * @param children The children of the element.
 */
export function Fragment(props: {
  children: JSX.Children;
}): JSX.FragmentElement {
  return new FragmentElement({}, props.children);
}

/**
 * Renders the `JSX.Element` into a string.
 * @param element The `JSX.Element`.
 */
export async function render(element: JSX.Element): Promise<string> {
  const current = await element;
  return await current.render();
}

export default { createElement, Fragment, render };

/**
 * Represents an `JSX` fragment
 */
class FragmentElement implements JSX.FragmentElement {
  readonly props: Record<string, unknown>;
  readonly children: JSX.Children;

  constructor(props: Record<string, unknown>, children: JSX.Children) {
    this.props = props;
    this.children = children;
  }

  async render(): Promise<string> {
    const promises = this.children.map((child) => renderChild(child));
    const renderings = await Promise.all(promises);
    return renderings.join('');
  }
}

/**
 * Represents an `JSX` instrinsic element
 */
class IntrinsicElement implements JSX.IntrinsicElement {
  readonly props: Record<string, JSX.Value>;
  readonly children: JSX.Children;
  readonly tag: string;

  constructor(
    props: Record<string, JSX.Value>,
    children: JSX.Children,
    name: string,
  ) {
    this.props = props;
    this.children = children;
    this.tag = name;
  }

  async render(): Promise<string> {
    const attributesPromises = Object.entries(this.props).map(renderAttribute);
    const childrenPromises = this.children.map(renderChild);

    const [attributes, children] = await Promise.all([
      Promise.all(attributesPromises),
      Promise.all(childrenPromises),
    ]);

    const divider = attributes.length === 0 ? '' : ' ';
    const attr = attributes.join(' ');
    const contents = children.join('');

    return children.length === 0 && isVoidElement(this.tag)
      ? `<${this.tag}${divider}${attr}/>`
      : `<${this.tag}${divider}${attr}>${contents}</${this.tag}>`;
  }
}

/**
 * Represents an `JSX` functional element
 */
class FunctionElement implements JSX.FunctionElement {
  readonly props: Record<string, unknown>;
  readonly children: JSX.Children;
  readonly function: FC;

  constructor(
    props: Record<string, unknown>,
    children: JSX.Children,
    component: FC,
  ) {
    this.props = props;
    this.children = children;
    this.function = component;
  }

  async render(): Promise<string> {
    if (!('children' in this.props)) this.props.children = this.children;
    const element = await this.function.call(null, this.props);
    return await element.render();
  }
}

/**
 * Render a child into a string.
 *
 * @param child The child to be rendered
 */
async function renderChild(child: JSX.Child): Promise<string> {
  if (child == null) return '';
  if (typeof child === 'string') return child;
  if (typeof child === 'boolean') return child ? 'true' : 'false';
  if (typeof child === 'bigint') return child.toString(10);
  if (typeof child === 'number') return child.toString(10);
  if (isDate(child)) return child.toISOString();
  if (isIterable(child)) {
    const promises = Array.from(child, (element) => renderChild(element));
    const renderings = await Promise.all(promises);
    return renderings.join('');
  }
  if (isPromise(child)) {
    return child.then((value) => renderChild(value));
  }
  if (isElement(child)) return await child.render();
  return '';
}

/**
 * Render an JSX attribute into a string.
 *
 * @param name The name of the attribute
 * @param value The value of the attribute
 */
async function renderAttribute(entry: [string, JSX.Value]): Promise<string> {
  const attribute = await renderValue(entry[1]);
  if (attribute == null) return '';
  const escaped = escapeAttribute(attribute);
  return `${entry[0]}="${escaped}"`;
}

/**
 * Renders an JSX value into a string or null.
 *
 * @param value An `JSX.Value`
 */
async function renderValue(value: JSX.Value): Promise<string | null> {
  if (value == null) return null;
  if (typeof value === 'string') return value;
  if (typeof value === 'boolean') return value ? '' : null;
  if (typeof value === 'bigint') return value.toString(10);
  if (typeof value === 'number') return value.toString(10);
  if (isDate(value)) {
    return Number.isNaN(value.valueOf()) ? '' : value.toISOString();
  }
  if (isIterable(value)) {
    const promises = Array.from(value, (element) => renderValue(element));
    const renderings = await Promise.all(promises);
    return renderings.join('');
  }
  if (isPromise(value)) {
    return value.then((value) => renderValue(value));
  }
  return '';
}

/**
 * Escapes the attribute value for each one of the following cases:
 * - Ampersand (`&`) are replaced with `&amp;`;
 * - Quotes (`"`) are replaced with `&quot;`;
 * - Non-breaking spaces (`\u00A0`) are replaced with `&nbsp;`.
 *
 * @param value the attribute value.
 */
function escapeAttribute(value: string) {
  return value.replace(/(&)|(")|(\u00A0)/g, (_, amp, quote) => {
    if (amp) return '&amp;';
    if (quote) return '&quot;';
    return '&nbsp;';
  });
}

/**
 * Returns `true` if the value is an `JSX.Element`; `false` otherwise.
 * @param value
 */
function isElement(value: unknown): value is JSX.Element {
  return (
    typeof value === 'object' &&
    value !== null &&
    (value instanceof FragmentElement ||
      value instanceof IntrinsicElement ||
      value instanceof FunctionElement)
  );
}

/**
 * Returns `true` if the value is a Promise; `false` otherwise.
 * @param value
 */
function isPromise(value: unknown): value is Promise<unknown> {
  return (
    typeof value === 'object' &&
    value !== null &&
    (value instanceof Promise ||
      ('then' in value && typeof value.then === 'function'))
  );
}

/**
 * Returns `true` if the value is an iterable; `false` otherwise.
 * @param value
 */
function isIterable(value: unknown): value is Iterable<unknown> {
  return (
    typeof value === 'object' &&
    value !== null &&
    Symbol.iterator in value &&
    typeof value[Symbol.iterator] === 'function'
  );
}

/**
 * Returns `true` if the value is an instance of `Date`, `false` otherwise.
 * @param value
 */
function isDate(value: unknown): value is Date {
  return typeof value === 'object' && value !== null && value instanceof Date;
}

const voidElements = {
  html: [
    'area',
    'base',
    'br',
    'col',
    'command',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
  ],
};

/**
 * Checks if the tag is a void element or not.
 * @param tag
 */
function isVoidElement(tag: string): boolean {
  return voidElements.html.includes(tag);
}
