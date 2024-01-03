import './types-global';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    type HTMLAutoFill =
      | HTMLAutoFillBase
      | `${OptionalPrefixToken<HTMLAutoFillSection>}${OptionalPrefixToken<AutoFillAddressKind>}${HTMLAutoFillField}${OptionalPostfixToken<HTMLAutoFillCredentialField>}`;
    type HTMLAutoFillField =
      | HTMLAutoFillNormalField
      | `${OptionalPrefixToken<HTMLAutoFillContactKind>}${HTMLAutoFillContactField}`;

    type HTMLAutoFillSection = `section-${string}`;

    type AutoFillAddressKind = 'billing' | 'shipping';

    type HTMLAutoFillBase = '' | 'off' | 'on';

    type HTMLAutoFillContactField =
      | 'email'
      | 'tel'
      | 'tel-area-code'
      | 'tel-country-code'
      | 'tel-extension'
      | 'tel-local'
      | 'tel-local-prefix'
      | 'tel-local-suffix'
      | 'tel-national';

    type HTMLAutoFillContactKind = 'home' | 'mobile' | 'work';

    type HTMLAutoFillCredentialField = 'webauthn';

    type HTMLAutoFillNormalField =
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

    type HTMLAutoCapitalize =
      | 'off'
      | 'on'
      | 'none'
      | 'sentences'
      | 'words'
      | 'characters';

    type HTMLBlocking = 'render';

    type HTMLButtonType = 'submit' | 'reset' | 'button';

    type HTMLContentEditable = '' | 'true' | 'plaintext-only' | 'false';

    type HTMLCrossOrigin = '' | ' anonymous' | 'use-credentials';

    type HTMLDecoding = 'sync' | 'async' | 'auto';

    type HTMLDestination =
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

    type HTMLDraggable = 'true' | 'false';

    type HTMLEncriptionType =
      | 'application/x-www-form-urlencoded'
      | 'multipart/form-data'
      | 'text/plain';

    type HTMLEnterKeyHint =
      | 'enter'
      | 'done'
      | 'go'
      | 'next'
      | 'previous'
      | 'search'
      | 'send';

    type HTMLFetchPriority = 'high' | 'low' | 'auto';

    type HTMLHidden = '' | 'hidden' | 'until-found';

    type HTMLHttpEquiv =
      | 'content-language'
      | 'content-type'
      | 'default-style'
      | 'refresh'
      | 'set-cookie'
      | 'x-ua-compatible'
      | 'policy';

    type HTMLInputMode =
      | 'none'
      | 'text'
      | 'tel'
      | 'url'
      | 'email'
      | 'numeric'
      | 'decimal'
      | 'search';

    type HTMLLoading = 'eager' | 'lazy';

    type HTMLMethod = 'GET' | 'POST' | 'dialog';

    type HTMLPopoverTargetAction = 'toggle' | 'show' | 'hide';

    type HTMLPreLoad = 'none' | 'metadata' | 'auto';

    type HTMLPotentialDestination = '' | 'fetch' | HTMLDestination;

    type HTMLReferrerPolicy =
      | ''
      | 'no-referrer'
      | 'no-referrer-when-downgrade'
      | 'same-origin'
      | 'origin'
      | 'strict-origin'
      | 'origin-when-cross-origin'
      | 'strict-origin-when-cross-origin'
      | 'unsafe-url';

    type HTMLRel =
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

    type HTMLRelAnchor = Exclude<
      HTMLRel,
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

    type HTMLRelForm = Exclude<
      HTMLRel,
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

    type HTMLRelLink = Exclude<
      HTMLRel,
      | 'bookmark'
      | 'external'
      | 'nofollow'
      | 'noopener'
      | 'noreferrer'
      | 'opener'
      | 'tag'
    >;

    type HTMLSandbox =
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

    type HTMLSpellCheck = '' | 'true' | 'false';

    type HTMLTableHeaderScope = 'row' | 'col' | 'rowgroup' | 'colgroup';

    type HTMLTarget = '_blank' | '_self' | '_parent' | '_top';

    type HTMLTextAreaWrap = 'soft' | 'hard';

    type HTMLTranslate = '' | 'yes' | 'no';

    type HTMLTrackKind =
      | 'subtitles'
      | 'captions'
      | 'descriptions'
      | 'chapters'
      | 'metadata';

    type HTMLVirtualKeyboardPolicy = '' | 'auto' | 'manual';

    interface HTMLAttributes
      extends GlobalAttributes,
        GlobalEventHandlers,
        WAIARIAAttributes,
        DataAttributes {
      accesskey?: string;
      autocapitalize?: HTMLAutoCapitalize;
      contenteditable?: boolean | HTMLContentEditable;
      draggable?: HTMLDraggable;
      enterkeyhint?: HTMLEnterKeyHint;
      hidden?: boolean | HTMLHidden;
      inputmode?: HTMLInputMode;
      itemid?: string;
      itemref?: string;
      itemscope?: boolean;
      itemtype?: string;
      nonce?: string;
      popover?: boolean | 'manual' | 'auto';
      spellcheck?: HTMLSpellCheck;
      translate?: HTMLTranslate;
      virtualkeyboardpolicy?: HTMLVirtualKeyboardPolicy;
    }

    interface HTMLAnchorAttributes extends HTMLAttributes {
      download?: string;
      href?: string;
      hreflang?: string;
      ping?: string;
      referrerpolicy?: HTMLReferrerPolicy;
      rel?: HTMLRelAnchor;
      target?: HTMLTarget;
      type?: string;
    }

    interface HTMLMediaAttributes extends HTMLAttributes {
      autoplay?: boolean;
      controls?: boolean;
      crossorigin?: HTMLCrossOrigin;
      loop?: boolean;
      muted?: boolean;
      preload?: HTMLPreLoad;
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
      formenctype?: HTMLEncriptionType;
      formmethod?: HTMLMethod;
      formnovalidate?: boolean;
      formtarget?: HTMLTarget;
    }

    interface HTMLInputHiddenAttributes extends HTMLFormListedAttributes {
      autocomplete?: HTMLAutoFill;
      dirname?: string;
      type: 'hidden';
      value?: string;
    }

    interface HTMLInputTextSearchAttributes extends HTMLFormListedAttributes {
      autocomplete?: HTMLAutoFill;
      dirname?: string;
      list?: string;
      maxlength?: StringNumber | number;
      minlength?: StringNumber | number;
      pattern?: string;
      placeholder?: string;
      readonly?: boolean;
      required?: boolean;
      size?: StringNumber | number;
      type: 'text' | 'search';
      value?: string;
    }

    interface HTMLInputTelephoneURLAttributes extends HTMLFormListedAttributes {
      autocomplete?: HTMLAutoFill;
      dirname?: string;
      list?: string;
      maxlength?: StringNumber | number;
      minlength?: StringNumber | number;
      pattern?: string;
      placeholder?: string;
      readonly?: boolean;
      required?: boolean;
      size?: StringNumber | number;
      type: 'tel' | 'url';
      value?: string;
    }

    interface HTMLInputEmailAttributes extends HTMLFormListedAttributes {
      autocomplete?: HTMLAutoFill;
      dirname?: string;
      list?: string;
      maxlength?: StringNumber | number;
      minlength?: StringNumber | number;
      multiple?: boolean;
      pattern?: string;
      placeholder?: string;
      readonly?: boolean;
      required?: boolean;
      size?: StringNumber | number;
      type: 'email';
      value?: string;
    }

    interface HTMLInputPasswordAttributes extends HTMLFormListedAttributes {
      autocomplete?: HTMLAutoFill;
      maxlength?: StringNumber | number;
      minlength?: StringNumber | number;
      pattern?: string;
      placeholder?: string;
      readonly?: boolean;
      required?: boolean;
      size?: StringNumber | number;
      type: 'password';
      value?: string;
    }

    interface HTMLInputDateMonthWeekTimeAttributes
      extends HTMLFormListedAttributes {
      autocomplete?: HTMLAutoFill;
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
      autocomplete?: HTMLAutoFill;
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
      autocomplete?: HTMLAutoFill;
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
      autocomplete?: HTMLAutoFill;
      list?: string;
      max?: string;
      min?: string;
      step?: string;
      type: 'range';
      value?: string;
    }

    interface HTMLInputColorAttributes extends HTMLFormListedAttributes {
      autocomplete?: HTMLAutoFill;
      list?: string;
      type: 'color';
      value?: string;
    }

    interface HTMLInputCheckboxRadioAttributes
      extends HTMLFormListedAttributes {
      autocomplete?: HTMLAutoFill;
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
      popovertargetaction?: HTMLPopoverTargetAction;
      type: 'submit';
      value?: string;
    }

    interface HTMLInputImageAttributes extends HTMLFormSubmittableAttributes {
      alt?: string;
      height?: StringNumber | number;
      popovertarget?: string;
      popovertargetaction?: HTMLPopoverTargetAction;
      src?: string;
      type: 'image';
      value?: string;
      width?: StringNumber | number;
    }

    interface HTMLInputResetButtonAttributes extends HTMLFormListedAttributes {
      popovertarget?: string;
      popovertargetaction?: HTMLPopoverTargetAction;
      type: 'button' | 'reset';
      value?: string;
    }

    interface HTMLModAttributes extends HTMLAttributes {
      cite?: string;
      datetime?: string;
    }

    interface HTMLTableColumnAttributes extends HTMLAttributes {
      span?: StringNumber | number;
    }

    // HTML Tags

    interface HTMLAnchorAreaAttributes extends HTMLAnchorAttributes {
      alt?: string;
      coords?: string;
      shape?: string;
    }

    interface HTMLAudioAttributes extends HTMLMediaAttributes {
      disableremoteplayback?: boolean;
    }

    interface HTMLBaseURLAttributes extends HTMLAttributes {
      href?: string;
      target?: HTMLTarget;
    }

    interface HTMLBidirectionalAttributes extends HTMLAttributes {
      dir?: Exclude<Dir, 'auto'>;
    }

    interface HTMLBlockquoteAttributes extends HTMLAttributes {
      cite?: string;
    }

    interface HTMLButtonAttributes extends HTMLFormSubmittableAttributes {
      popovertarget?: string;
      popovertargetaction?: HTMLPopoverTargetAction;
      type?: HTMLButtonType;
      value?: string;
    }

    interface HTMLCanvasAttributes extends HTMLAttributes {
      height?: StringNumber | number;
      width?: StringNumber | number;
    }

    interface HTMLDataAttributes extends HTMLAttributes {
      value?: string;
    }

    interface HTMLDateTimeAttributes extends HTMLAttributes {
      datetime?: string;
    }

    interface HTMLEmbedAttributes extends HTMLAttributes {
      height?: StringNumber | number;
      width?: StringNumber | number;
      src?: string;
      type?: string;
    }

    interface HTMLFormAttributes extends HTMLAttributes {
      ['accept-charset']?: string;
      action?: string;
      autocomplete?: HTMLAutoFill;
      enctype?: HTMLEncriptionType;
      method?: HTMLMethod;
      name?: string;
      novalidate?: boolean;
      rel?: HTMLRelForm;
      target?: HTMLTarget;
    }

    interface HTMLRootAttributes extends HTMLAttributes {
      /** @deprecated */
      manifest?: string;
      /** @deprecated */
      version?: string;
      xmls?: 'http://www.w3.org/1999/xhtml';
    }

    interface HTMLInlineFrameAttributes extends HTMLAttributes {
      allow?: string;
      allowfullscreen?: boolean;
      height?: StringNumber | number;
      loading?: HTMLLoading;
      name?: string;
      referrerpolicy?: HTMLReferrerPolicy;
      sandbox?: HTMLSandbox;
      src?: string;
      srcdoc?: string;
      width?: StringNumber | number;
    }

    interface HTMLImageAttributes extends HTMLAttributes {
      alt?: string;
      crossorigin?: HTMLCrossOrigin;
      decoding?: HTMLDecoding;
      fetchpriority?: HTMLFetchPriority;
      height?: StringNumber | number;
      ismap?: boolean;
      loading?: HTMLLoading;
      referrerpolicy?: HTMLReferrerPolicy;
      sizes?: string;
      src?: string;
      srcset?: string;
      usemap?: string;
      width?: StringNumber | number;
    }

    interface HTMLImageMapAttributes extends HTMLAttributes {
      name?: string;
    }

    type HTMLInputAttributes =
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

    interface HTMLLabelAttributes extends HTMLAttributes {
      for?: string;
    }

    interface HTMLListItemAttributes extends HTMLAttributes {
      value?: StringNumber | number;
    }

    interface HTMLLinkAttributes extends HTMLAttributes {
      action?: HTMLPotentialDestination;
      blocking?: HTMLBlocking;
      crossorigin?: HTMLCrossOrigin;
      fetchpriority?: HTMLFetchPriority;
      href?: string;
      hreflang?: string;
      imagesizes?: string;
      imagesrcset?: string;
      integrity?: string;
      media?: string;
      referrerpolicy?: HTMLReferrerPolicy;
      rel?: HTMLRelLink;
      sizes?: string;
      type?: string;
    }

    interface HTMLMetadataAttributes extends HTMLAttributes {
      'charset'?: string;
      'content'?: string;
      'http-equiv'?: HTMLHttpEquiv;
      'name'?: string;
    }

    interface HTMLMeterAttributes extends HTMLAttributes {
      high?: StringNumber | number;
      low?: StringNumber | number;
      max?: StringNumber | number;
      min?: StringNumber | number;
      optimum?: StringNumber | number;
      value?: StringNumber | number;
    }

    interface HTMLObjectAttributes extends HTMLAttributes {
      data?: string;
      form?: string;
      height?: StringNumber | number;
      name?: string;
      type?: string;
      usemap?: string;
      width?: StringNumber | number;
    }

    interface HTMLOrderedListAttributes extends HTMLAttributes {
      reversed?: boolean;
      start?: StringNumber | number;
    }

    interface HTMLOptionGroupAttributes extends HTMLAttributes {
      disabled?: boolean;
      label?: string;
    }

    interface HTMLOptionAttributes extends HTMLAttributes {
      disabled?: boolean;
      label?: string;
      selected?: boolean;
      value?: string;
    }

    interface HTMLOutputAttributes extends HTMLAttributes {
      for?: string;
      form?: string;
      name: string;
    }

    interface HTMLPortalAttributes extends HTMLAttributes {
      referrerpolicy: HTMLReferrerPolicy;
      src?: string;
    }

    interface HTMLProgressIndicatorAttributes extends HTMLAttributes {
      max?: StringNumber | number;
      value?: StringNumber | number;
    }

    interface HTMLQuotationAttributes extends HTMLAttributes {
      cite?: string;
    }

    interface HTMLScriptAttributes extends HTMLAttributes {
      async?: boolean;
      blocking?: HTMLBlocking;
      crossorigin?: HTMLCrossOrigin;
      defer?: boolean;
      fetchpriority?: HTMLFetchPriority;
      importmap?: boolean;
      integrity?: string;
      module?: boolean;
      nomodule?: boolean;
      nonce?: string;
      referrerpolicy?: HTMLReferrerPolicy;
      src?: string;
      type?: string;
    }

    interface HTMLSelectAttributes extends HTMLFormListedAttributes {
      autocomplete?: HTMLAutoFill;
      autofocus?: boolean;
      multiple?: boolean;
      required?: boolean;
      size?: StringNumber | number;
    }

    interface HTMLSlotAttributes extends HTMLAttributes {
      name?: string;
    }

    interface HTMLSourceAttributes extends HTMLAttributes {
      height?: StringNumber | number;
      media?: string;
      sizes?: string;
      src?: string;
      srcset?: string;
      type?: string;
      width?: StringNumber | number;
    }

    interface HTMLStyleAttributes extends HTMLAttributes {
      blocking?: HTMLBlocking;
      media?: string;
      nonce?: string;
    }

    interface HTMLTableDataCellAttributes extends HTMLAttributes {
      colspan?: StringNumber | number;
      headers?: string;
      rowspan?: StringNumber | number;
    }

    interface HTMLTableHeaderCellTag extends HTMLAttributes {
      abbr?: string;
      colspan?: StringNumber | number;
      headers: string;
      rowspan?: StringNumber | number;
      scope: HTMLTableHeaderScope;
    }

    interface HTMLTemplateAttributes extends HTMLAttributes {
      shadowrootmode?: 'open' | 'closed';
    }

    interface HTMLTextareaAttributes extends HTMLFormListedAttributes {
      autocomplete?: HTMLAutoFill;
      autofocus?: boolean;
      cols?: StringNumber | number;
      dirname?: string;
      maxlength?: StringNumber | number;
      minlength?: StringNumber | number;
      placeholder?: string;
      readonly?: boolean;
      required?: boolean;
      rows?: StringNumber | number;
      wrap?: HTMLTextAreaWrap;
    }

    interface HTMLTrackAttributes extends HTMLAttributes {
      default?: boolean;
      kind?: HTMLTrackKind;
      label?: string;
      src?: string;
      srclang?: string;
    }

    interface HTMLVideoAttributes extends HTMLMediaAttributes {
      disablepictureinpicture?: boolean;
      disableremoteplayback?: boolean;
      height?: StringNumber | number;
      playsinline?: boolean;
      poster?: string;
      width?: StringNumber | number;
    }

    interface HTMLTagMap {
      a: HTMLAnchorAttributes;
      abbr: HTMLAttributes;
      address: HTMLAttributes;
      area: HTMLAnchorAreaAttributes;
      article: HTMLAttributes;
      aside: HTMLAttributes;
      audio: HTMLAudioAttributes;
      b: HTMLAttributes;
      base: HTMLBaseURLAttributes;
      bdi: HTMLBidirectionalAttributes;
      bdo: HTMLAttributes;
      blockquote: HTMLBlockquoteAttributes;
      body: HTMLAttributes;
      br: HTMLAttributes;
      button: HTMLButtonAttributes;
      canvas: HTMLCanvasAttributes;
      caption: HTMLAttributes;
      cite: HTMLAttributes;
      code: HTMLAttributes;
      col: HTMLTableColumnAttributes;
      colgroup: HTMLTableColumnAttributes;
      data: HTMLDataAttributes;
      datalist: HTMLAttributes;
      dd: HTMLAttributes;
      del: HTMLModAttributes;
      details: HTMLOpenableAttributes;
      dfn: HTMLAttributes;
      dialog: HTMLOpenableAttributes;
      div: HTMLAttributes;
      dl: HTMLAttributes;
      dt: HTMLAttributes;
      em: HTMLAttributes;
      embed: HTMLEmbedAttributes;
      fieldset: HTMLFormListedAttributes;
      figcaption: HTMLAttributes;
      figure: HTMLAttributes;
      footer: HTMLAttributes;
      form: HTMLFormAttributes;
      h1: HTMLAttributes;
      h2: HTMLAttributes;
      h3: HTMLAttributes;
      h4: HTMLAttributes;
      h5: HTMLAttributes;
      h6: HTMLAttributes;
      head: HTMLAttributes;
      header: HTMLAttributes;
      hgroup: HTMLAttributes;
      hr: HTMLAttributes;
      html: HTMLRootAttributes;
      i: HTMLAttributes;
      iframe: HTMLInlineFrameAttributes;
      img: HTMLImageAttributes;
      input: HTMLInputAttributes;
      ins: HTMLModAttributes;
      kbd: HTMLAttributes;
      label: HTMLLabelAttributes;
      legend: HTMLAttributes;
      li: HTMLListItemAttributes;
      link: HTMLLinkAttributes;
      main: HTMLAttributes;
      map: HTMLImageMapAttributes;
      mark: HTMLAttributes;
      menu: HTMLAttributes;
      meta: HTMLMetadataAttributes;
      meter: HTMLMeterAttributes;
      nav: HTMLAttributes;
      noscript: HTMLAttributes;
      object: HTMLObjectAttributes;
      ol: HTMLOrderedListAttributes;
      optgroup: HTMLOptionGroupAttributes;
      option: HTMLOptionAttributes;
      output: HTMLOutputAttributes;
      p: HTMLAttributes;
      picture: HTMLAttributes;
      portal: HTMLPortalAttributes;
      pre: HTMLAttributes;
      progress: HTMLProgressIndicatorAttributes;
      q: HTMLQuotationAttributes;
      rp: HTMLAttributes;
      rt: HTMLAttributes;
      ruby: HTMLAttributes;
      s: HTMLAttributes;
      samp: HTMLAttributes;
      script: HTMLScriptAttributes;
      search: HTMLAttributes;
      section: HTMLAttributes;
      select: HTMLSelectAttributes;
      slot: HTMLSlotAttributes;
      small: HTMLAttributes;
      source: HTMLSourceAttributes;
      span: HTMLAttributes;
      strong: HTMLAttributes;
      style: HTMLStyleAttributes;
      sub: HTMLAttributes;
      summary: HTMLAttributes;
      sup: HTMLAttributes;
      table: HTMLAttributes;
      tbody: HTMLAttributes;
      td: HTMLTableDataCellAttributes;
      template: HTMLTemplateAttributes;
      textarea: HTMLTextareaAttributes;
      tfoot: HTMLAttributes;
      th: HTMLTableHeaderCellTag;
      thead: HTMLAttributes;
      time: HTMLDateTimeAttributes;
      title: HTMLDateTimeAttributes;
      tr: HTMLAttributes;
      track: HTMLTrackAttributes;
      u: HTMLAttributes;
      ul: HTMLAttributes;
      var: HTMLAttributes;
      video: HTMLVideoAttributes;
      wbr: HTMLAttributes;
    }
  }
}
