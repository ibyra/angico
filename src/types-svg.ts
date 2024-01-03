import './types-html';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    type SVGRendering =
      | 'auto'
      | 'optimizeSpeed'
      | 'crispEdges'
      | 'geometricPrecision'
      | 'inherit';

    type SVGViewBox = `${number} ${number} ${number} ${number}`;

    type SVGPreserveAspectRatioAlign =
      | 'none'
      | 'xMinYMin'
      | 'xMidYMin'
      | 'xMaxYMin'
      | 'xMinYMid'
      | 'xMidYMid'
      | 'xMaxYMid'
      | 'xMinYMax'
      | 'xMidYMax'
      | 'xMaxYMax';

    type SVGPreserveAspectRatioMeetSlice = 'meet' | 'slice';

    type SVGPreserveAspectRatio =
      | `${SVGPreserveAspectRatioAlign}`
      | `${SVGPreserveAspectRatioAlign} ${SVGPreserveAspectRatioMeetSlice}`;

    interface SVGAttributes
      extends GlobalAttributes,
        GlobalEventHandlers,
        WAIARIAAttributes,
        DataAttributes {}

    interface SVGConditionalProcessingAttributes {
      requiredExtensions?: string;
      /** @deprecated */
      requiredFeatures?: string;
      systemLanguage?: string;
    }

    interface SVGXLinkAttributes {
      /** @deprecated */
      ['xlink:href']?: string;
      /** @deprecated */
      ['xlink:title']?: string;
    }

    interface SVGPresentationAttributes {
      ['alignment-baseline']?:
        | 'auto'
        | 'baseline'
        | 'before-edge'
        | 'text-before-edge'
        | 'middle'
        | 'central'
        | 'after-edge'
        | 'text-after-edge'
        | 'ideographic'
        | 'alphabetic'
        | 'hanging'
        | 'mathematical'
        | 'inherit';
      ['baseline-shift']?: string;
      ['clip-path']?: string;
      ['clip-rule']?: 'nonzero' | 'evenodd';
      ['color']?: string;
      ['color-interpolation']?: 'auto' | 'sRGB' | 'linearRGB';
      ['color-interpolation-filters']?: 'auto' | 'sRGB' | 'linearRGB';
      ['color-rendering']?: SVGRendering;
      ['cursor']?: string;
      ['direction']?: Dir;
      ['display']?: string;
      ['dominant-baseline']?:
        | 'auto'
        | 'text-bottom'
        | 'alphabetic'
        | 'ideographic'
        | 'middle'
        | 'central'
        | 'mathematical'
        | 'hanging'
        | 'text-top';
      ['fill']?: string;
      ['fill-opacity']?: StringNumber | StringPercentage;
      ['fill-rule']?: 'nonzero' | 'evenodd' | 'inherit';
      ['filter']?: string;
      ['flood-color']?: string;
      ['flood-opacity']?: string;
      ['font-family']?: string;
      ['font-size']?: string;
      ['font-size-adjust']?: string;
      ['font-stretch']?: string;
      ['font-style']?: 'normal' | 'italic' | 'oblique';
      ['font-variant']?: string;
      ['font-weight']?:
        | 'normal'
        | 'bold'
        | 'lighter'
        | 'bolder'
        | '100'
        | '200'
        | '300'
        | '400'
        | '500'
        | '600'
        | '700'
        | '800'
        | '900';
      ['image-rendering']?: SVGRendering;
      ['letter-spacing']?: string;
      ['lighting-color']?: string;
      ['marker-end']?: string;
      ['marker-mid']?: string;
      ['marker-start']?: string;
      ['mask']?: string;
      ['opacity']?: string;
      ['overflow']?: 'visible' | 'hidden' | 'scroll' | 'auto';
      ['pointer-events']?:
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
      ['shape-rendering']?: SVGRendering;
      ['stop-color']?: string;
      ['stop-opacity']?: string;
      ['stroke']?: string;
      ['stroke-dasharray']?: string;
      ['stroke-dashoffset']?: string;
      ['stroke-linecap']?: 'butt' | 'round' | 'square';
      ['stroke-linejoin']?: 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round';
      ['stroke-miterlimit']?: StringNumber;
      ['stroke-opacity']?: string;
      ['stroke-width']?: string;
      ['text-anchor']?: 'start' | 'middle' | 'end';
      ['text-decoration']?:
        | 'none'
        | 'underline'
        | 'overline'
        | 'line-through'
        | 'blink';
      ['text-rendering']?: SVGRendering;
      ['transform']?: string;
      ['visibility']?: 'visible' | 'hidden' | 'collapse';
      ['word-spacing']?: string;
      ['writing-mode']?: 'lr-tb' | 'rl-tb' | 'tb-rl' | 'lr' | 'rl' | 'tb';
    }

    interface SVGCenterAttributes {
      cx?: string;
      cy?: string;
    }

    interface SVGDimensionAttributes {
      height?: string;
      width?: string;
      x?: string;
      y?: string;
    }

    interface SVGRadiusAttributes {
      r?: string;
    }

    interface SVGRadiusesAttributes {
      rx?: string;
      ry?: string;
    }

    interface SVGRootAttributes
      extends SVGAttributes,
        SVGDimensionAttributes,
        SVGPresentationAttributes,
        SVGConditionalProcessingAttributes {
      viewBox?: SVGViewBox;
      preserveAspectRatio?: SVGPreserveAspectRatio;
      xmlns?: 'http://www.w3.org/2000/svg';
    }

    interface SVGSymbolAttributes
      extends SVGAttributes,
        SVGDimensionAttributes,
        SVGPresentationAttributes,
        SVGConditionalProcessingAttributes {
      viewBox?: SVGViewBox;
      preserveAspectRatio?: SVGPreserveAspectRatio;
      refX?: string;
      refY?: string;
    }

    interface SVGUseAttributes
      extends SVGAttributes,
        SVGDimensionAttributes,
        SVGPresentationAttributes,
        SVGConditionalProcessingAttributes {
      href?: string;
    }

    interface SVGImageAttributes
      extends SVGAttributes,
        SVGDimensionAttributes,
        SVGPresentationAttributes,
        SVGConditionalProcessingAttributes {
      preserveAspectRatio?: SVGPreserveAspectRatio;
      href?: string;
      crossorigin?: HTMLCrossOrigin;
    }

    interface SVGForeignObjectAttributes
      extends SVGAttributes,
        SVGDimensionAttributes,
        SVGPresentationAttributes,
        SVGConditionalProcessingAttributes {}

    interface SVGRectAttributes
      extends SVGAttributes,
        SVGDimensionAttributes,
        SVGRadiusesAttributes,
        SVGPresentationAttributes,
        SVGConditionalProcessingAttributes {
      pathLength?: StringNumber | number;
    }

    interface SVGCircleAttributes
      extends SVGAttributes,
        SVGCenterAttributes,
        SVGRadiusAttributes,
        SVGDimensionAttributes,
        SVGPresentationAttributes,
        SVGConditionalProcessingAttributes {
      pathLength?: StringNumber | number;
    }

    interface SVGEllipseAttributes
      extends SVGAttributes,
        SVGCenterAttributes,
        SVGRadiusesAttributes,
        SVGDimensionAttributes,
        SVGPresentationAttributes,
        SVGConditionalProcessingAttributes {
      pathLength?: StringNumber | number;
    }

    interface SVGLineAttributes
      extends SVGAttributes,
        SVGPresentationAttributes,
        SVGConditionalProcessingAttributes {
      pathLength?: StringNumber | number;
      x1?: string;
      y1?: string;
      x2?: string;
      y2?: string;
    }

    interface SVGPolygonAttributes
      extends SVGAttributes,
        SVGPresentationAttributes,
        SVGConditionalProcessingAttributes {
      pathLength?: StringNumber | number;
      points?: string;
    }

    interface SVGPolylineAttributes
      extends SVGAttributes,
        SVGPresentationAttributes,
        SVGConditionalProcessingAttributes {
      pathLength?: StringNumber | number;
      points?: string;
    }

    interface SVGPathAttributes
      extends SVGAttributes,
        SVGPresentationAttributes,
        SVGConditionalProcessingAttributes {
      pathLength?: StringNumber | number;
      d?: string;
    }

    interface SVGTextAttributes
      extends SVGAttributes,
        SVGPresentationAttributes,
        SVGConditionalProcessingAttributes {
      x?: string;
      y?: string;
      dx?: string;
      dy?: string;
      rotate?: string;
      textLength?: string;
      lengthAdjust?: 'spacing' | 'spacingAndGlyphs';
    }

    interface SVGTagMap {
      circle: SVGCircleAttributes;
      defs: SVGAttributes;
      g: SVGAttributes;
      foreignObject: SVGForeignObjectAttributes;
      ellipse: SVGEllipseAttributes;
      image: SVGImageAttributes;
      line: SVGLineAttributes;
      path: SVGPathAttributes;
      polygon: SVGPolygonAttributes;
      polyline: SVGPolylineAttributes;
      rect: SVGRectAttributes;
      text: SVGTextAttributes;
      tspan: SVGTextAttributes;
      svg: SVGRootAttributes;
      symbol: SVGSymbolAttributes;
      use: SVGUseAttributes;
    }
  }
}
