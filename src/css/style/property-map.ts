import {
  normalizeAccentColor,
  normalizeAlignContent,
  normalizeAlignItems,
  normalizeAlignSelf,
  normalizeAnimation,
  normalizeAppearance,
  normalizeAspectRatio,
  normalizeBackdropFilter,
  normalizeBackfaceVisibility,
  normalizeBackground,
  normalizeBackgroundBlendMode,
  normalizeBackgroundClip,
  normalizeBackgroundOrigin,
  normalizeBlockSize,
  normalizeBorder,
  normalizeBorderBlock,
  normalizeBorderBlockEnd,
  normalizeBorderBlockStart,
  normalizeBorderBottom,
  normalizeBorderBottomLeftRadius,
  normalizeBorderBottomRightRadius,
  normalizeBorderCollapse,
  normalizeBorderEndEndRadius,
  normalizeBorderEndStartRadius,
  normalizeBorderImage,
  normalizeBorderInlineEnd,
  normalizeBorderInlineStart,
  normalizeBorderLeft,
  normalizeBorderRadius,
  normalizeBorderRight,
  normalizeBorderStartEndRadius,
  normalizeBorderStartStartRadius,
  normalizeBorderStyle,
  normalizeBorderTop,
  normalizeBorderTopLeftRadius,
  normalizeBorderTopRightRadius,
  normalizeBorderWidth,
  normalizeBottom,
  normalizeBoxShadow,
  normalizeBoxSizing,
  normalizeBreakAfter,
  normalizeBreakBefore,
  normalizeBreakInside,
  normalizeCaptionSide,
  normalizeCaretColor,
  normalizeClear,
  normalizeClip,
  normalizeClipPath,
  normalizeColor,
  normalizeColorInterpolation,
  normalizeColorInterpolationFilters,
  normalizeColorScheme,
  normalizeColumnCount,
  normalizeColumnFill,
  normalizeColumnGap,
  normalizeColumnRule,
  normalizeColumnSpan,
  normalizeColumnWidth,
  normalizeContain,
  normalizeContainer,
  normalizeContainIntrinsicBlockSize,
  normalizeContainIntrinsicHeight,
  normalizeContainIntrinsicInlineSize,
  normalizeContainIntrinsicSize,
  normalizeContainIntrinsicWidth,
  normalizeContent,
  normalizeContentVisibility,
  normalizeCounterIncrement,
  normalizeCounterReset,
  normalizeCounterSet,
  normalizeCursor,
  normalizeCx,
  normalizeCy,
  normalizeD,
  normalizeDirection,
  normalizeDisplay,
  normalizeDominantBaseline,
  normalizeEmptyCells,
  normalizeFieldSizing,
  normalizeFill,
  normalizeFillOpacity,
  normalizeFillRule,
  normalizeFilter,
  normalizeFlex,
  normalizeFlexBasis,
  normalizeFlexDirection,
  normalizeFlexGrow,
  normalizeFlexShrink,
  normalizeFlexWrap,
  normalizeFloat,
  normalizeFloodColor,
  normalizeFloodOpacity,
  normalizeFont,
  normalizeFontFeatureSettings,
  normalizeFontKerning,
  normalizeFontLanguageOverride,
  normalizeFontOpticalSizing,
  normalizeFontPalette,
  normalizeFontSizeAdjust,
  normalizeFontSynthesisSmallCaps,
  normalizeFontSynthesisStyle,
  normalizeFontSynthesisWeight,
  normalizeFontVariantAlternates,
  normalizeFontVariantCaps,
  normalizeFontVariantEastAsian,
  normalizeFontVariantLigatures,
  normalizeFontVariantNumeric,
  normalizeFontVariantPosition,
  normalizeFontVariationSettings,
  normalizeForcedColorAdjust,
  normalizeGap,
  normalizeGridAutoColumns,
  normalizeGridAutoFlow,
  normalizeGridAutoRows,
  normalizeGridColumn,
  normalizeGridRow,
  normalizeGridTemplate,
  normalizeGridTemplateColumns,
  normalizeGridTemplateAreas,
  normalizeHeight,
  normalizeHyphenateCharacter,
  normalizeHyphens,
  normalizeImageOrientation,
  normalizeImageRendering,
  normalizeInlineSize,
  normalizeInset,
  normalizeInsetBlock,
  normalizeInsetInline,
  normalizeIsolation,
  normalizeJustifyContent,
  normalizeJustifyItems,
  normalizeJustifySelf,
  normalizeLeft,
  normalizeLetterSpacing,
  normalizeLightingColor,
  normalizeLineBreak,
  normalizeLineHeight,
  normalizeListStyle,
  normalizeMargin,
  normalizeMarginBlock,
  normalizeMarginInline,
  normalizeMask,
  normalizeMaskClip,
  normalizeMathStyle,
  normalizeMaxBlockSize,
  normalizeMaxHeight,
  normalizeMaxInlineSize,
  normalizeMaxWidth,
  normalizeMinBlockSize,
  normalizeMinHeight,
  normalizeMinInlineSize,
  normalizeMinWidth,
  normalizeMixBlendMode,
  normalizeObjectFit,
  normalizeObjectPosition,
  normalizeOffset,
  normalizeOffsetAnchor,
  normalizeOpacity,
  normalizeOrder,
  normalizeOutline,
  normalizeOutlineOffset,
  normalizeOverflow,
  normalizeOverscrollBehavior,
  normalizeOverscrollBehaviorBlock,
  normalizeOverscrollBehaviorInline,
  normalizePadding,
  normalizePerspective,
  normalizePerspectiveOrigin,
  normalizePlaceContent,
  normalizePlaceItems,
  normalizePlaceSelf,
  normalizePointerEvents,
  normalizePosition,
  normalizeQuotes,
  normalizeResize,
  normalizeRight,
  normalizeRotate,
  normalizeRubyAlign,
  normalizeRubyPosition,
  normalizeScale,
  normalizeScrollbarColor,
  normalizeScrollbarGutter,
  normalizeScrollbarWidth,
  normalizeScrollBehavior,
  normalizeScrollMargin,
  normalizeScrollPadding,
  normalizeScrollSnapAlign,
  normalizeScrollSnapStop,
  normalizeScrollSnapType,
  normalizeScrollTimeline,
  normalizeScrollTimelineAxis,
  normalizeScrollTimelineName,
  normalizeShapeImageThreshold,
  normalizeShapeMargin,
  normalizeShapeOutside,
  normalizeShapeRendering,
  normalizeStopColor,
  normalizeStopOpacity,
  normalizeStroke,
  normalizeStrokeDasharray,
  normalizeStrokeDashoffset,
  normalizeStrokeLinecap,
  normalizeStrokeLinejoin,
  normalizeStrokeMiterlimit,
  normalizeStrokeOpacity,
  normalizeStrokeWidth,
  normalizeTableLayout,
  normalizeTabSize,
  normalizeTextAlign,
  normalizeTextAlignLast,
  normalizeTextAnchor,
  normalizeTextCombineUpright,
  normalizeTextDecoration,
  normalizeTextEmphasis,
  normalizeTextIndent,
  normalizeTextJustify,
  normalizeTextOrientation,
  normalizeTextOverflow,
  normalizeTextRendering,
  normalizeTextShadow,
  normalizeTextTransform,
  normalizeTextUnderlineOffset,
  normalizeTextUnderlinePosition,
  normalizeTextWrap,
  normalizeTextWrapStyle,
  normalizeTop,
  normalizeTouchAction,
  normalizeTransform,
  normalizeTransformBox,
  normalizeTransformOrigin,
  normalizeTransformStyle,
  normalizeTransition,
  normalizeTransitionBehavior,
  normalizeTranslate,
  normalizeUserSelect,
  normalizeVectorEffect,
  normalizeVerticalAlign,
  normalizeVisibility,
  normalizeWhiteSpace,
  normalizeWidth,
  normalizeWillChange,
  normalizeWordBreak,
  normalizeWordSpacing,
  normalizeWritingMode,
  normalizeZIndex,
  normalizeZoom,
  normalizeGridTemplateRows,
  normalizeFontFamily,
  normalizeFontSize,
  normalizeFontStretch,
  normalizeFontStyle,
  normalizeFontVariant,
  normalizeFontWeight,
} from '../util'

import type {
  TBorder,
  TBorderWidth,
  TDisplay,
  TFlex,
  TFlexDirection,
  TMargin,
  TPadding,
  TBorderStyle,
  TFlexBasis,
  TFlexGrow,
  TFlexShrink,
  TFlexWrap,
  TAnimation,
  TBackground,
  TBorderImage,
  TBorderBlockStart,
  TBorderBlockEnd,
  TBorderBlock,
  TBorderInlineStart,
  TBorderInlineEnd,
  TBorderInline,
  TBorderRadius,
  TBorderBottom,
  TBorderBottomLeftRadius,
  TBorderBottomRightRadius,
  TBorderCollapse,
  TBorderEndEndRadius,
  TBorderEndStartRadius,
  TBorderTop,
  TBorderTopLeftRadius,
  TBorderTopRightRadius,
  TBorderLeft,
  TBorderRight,
  TBorderStartEndRadius,
  TBorderStartStartRadius,
  TBlockSize,
  TAspectRatio,
  TAppearance,
  TAccentColor,
  TAlignContent,
  TAlignItems,
  TAlignSelf,
  TBackdropFilter,
  TBackfaceVisibility,
  TBackgroundBlendMode,
  TBackgroundClip,
  TBackgroundOrigin,
  TBoxShadow,
  TBoxSizing,
  TBreakAfter,
  TBreakBefore,
  TBreakInside,
  TCaptionSide,
  TCaretColor,
  TClear,
  TClip,
  TClipPath,
  TColor,
  TColorInterpolation,
  TColorInterpolationFilters,
  TColorScheme,
  TColumnCount,
  TColumnFill,
  TColumnGap,
  TColumnRule,
  TColumnSpan,
  TColumnWidth,
  TContain,
  TContainIntrinsicBlockSize,
  TContainIntrinsicHeight,
  TContainIntrinsicInlineSize,
  TContainIntrinsicSize,
  TContainIntrinsicWidth,
  TContainer,
  TContent,
  TContentVisibility,
  TCounterIncrement,
  TCounterReset,
  TCounterSet,
  TCursor,
  TCx,
  TCy,
  TD,
  TDirection,
  TDominantBaseline,
  TEmptyCells,
  TFieldSizing,
  TFill,
  TFillOpacity,
  TFillRule,
  TFilter,
  TFloat,
  TFloodColor,
  TFloodOpacity,
  TFont,
  TFontFeatureSettings,
  TFontKerning,
  TFontLanguageOverride,
  TFontOpticalSizing,
  TFontPalette,
  TFontSizeAdjust,
  TFontSynthesisSmallCaps,
  TFontSynthesisStyle,
  TFontSynthesisWeight,
  TFontVariantAlternates,
  TFontVariantCaps,
  TFontVariantEastAsian,
  TFontVariantLigatures,
  TFontVariantNumeric,
  TFontVariantPosition,
  TFontVariationSettings,
  TForcedColorAdjust,
  TGap,
  TGridAutoColumns,
  TGridAutoFlow,
  TGridAutoRows,
  TGridColumn,
  TGridRow,
  TGridTemplate,
  TGridTemplateColumns,
  TGridTemplateAreas,
  THeight,
  THyphenateCharacter,
  THyphens,
  TImageOrientation,
  TImageRendering,
  TInlineSize,
  TInset,
  TInsetBlock,
  TInsetInline,
  TIsolation,
  TJustifyContent,
  TJustifyItems,
  TJustifySelf,
  TBottom,
  TLeft,
  TRight,
  TTop,
  TLetterSpacing,
  TLightingColor,
  TLineBreak,
  TLineHeight,
  TListStyle,
  TMarginBlock,
  TMarginInline,
  TMaskClip,
  TMask,
  TMathStyle,
  TMaxBlockSize,
  TMaxHeight,
  TMaxInlineSize,
  TMaxWidth,
  TMinBlockSize,
  TMinHeight,
  TMinInlineSize,
  TMinWidth,
  TMixBlendMode,
  TObjectFit,
  TObjectPosition,
  TOffsetAnchor,
  TOffset,
  TOpacity,
  TOrder,
  TOutlineOffset,
  TOutline,
  TOverflow,
  TOverscrollBehavior,
  TOverscrollBehaviorBlock,
  TOverscrollBehaviorInline,
  TPerspective,
  TPerspectiveOrigin,
  TPlaceContent,
  TPlaceItems,
  TPlaceSelf,
  TPointerEvents,
  TPosition,
  TQuotes,
  TResize,
  TRotate,
  TRubyAlign,
  TRubyPosition,
  TScale,
  TScrollMargin,
  TScrollPadding,
  TScrollBehavior,
  TScrollSnapAlign,
  TScrollSnapStop,
  TScrollSnapType,
  TScrollTimeline,
  TScrollTimelineAxis,
  TScrollTimelineName,
  TScrollbarColor,
  TScrollbarGutter,
  TScrollbarWidth,
  TShapeImageThreshold,
  TShapeMargin,
  TShapeOutside,
  TShapeRendering,
  TStopColor,
  TStopOpacity,
  TStroke,
  TStrokeDasharray,
  TStrokeDashoffset,
  TStrokeLinecap,
  TStrokeLinejoin,
  TStrokeMiterlimit,
  TStrokeOpacity,
  TStrokeWidth,
  TTabSize,
  TTableLayout,
  TTextDecoration,
  TTextEmphasis,
  TTextAlign,
  TTextAlignLast,
  TTextAnchor,
  TTextCombineUpright,
  TTextIndent,
  TTextJustify,
  TTextOrientation,
  TTextOverflow,
  TTextRendering,
  TTextShadow,
  TTextTransform,
  TTextUnderlineOffset,
  TTextUnderlinePosition,
  TTextWrap,
  TTextWrapStyle,
  TTouchAction,
  TTransform,
  TTransformBox,
  TTransformOrigin,
  TTransformStyle,
  TTransition,
  TTransitionBehavior,
  TTranslate,
  TUserSelect,
  TVectorEffect,
  TVerticalAlign,
  TVisibility,
  TWhiteSpace,
  TWidth,
  TWillChange,
  TWordBreak,
  TWordSpacing,
  TWritingMode,
  TZIndex,
  TZoom,
  TGridTemplateRows,
  TFontFamily,
  TFontSize,
  TFontStretch,
  TFontStyle,
  TFontVariant,
  TFontWeight,
} from '../type'
import type { TThemeColor } from './theme'

export type TEnv = 'development' | 'production' | 'test'
export type TCSSPropValue = Partial<{
  accentColor: TAccentColor
  alignContent: TAlignContent
  alignItems: TAlignItems
  alignSelf: TAlignSelf
  animation: TAnimation
  appearance: TAppearance
  aspectRatio: TAspectRatio
  backdropFilter: TBackdropFilter
  backfaceVisibility: TBackfaceVisibility
  background: TBackground
  backgroundBlendMode: TBackgroundBlendMode
  backgroundClip: TBackgroundClip
  backgroundOrigin: TBackgroundOrigin
  blockSize: TBlockSize
  border: TBorder
  borderBlock: TBorderBlock
  borderBlockStart: TBorderBlockStart
  borderBlockEnd: TBorderBlockEnd
  borderBottom: TBorderBottom
  borderBottomLeftRadius: TBorderBottomLeftRadius
  borderBottomRightRadius: TBorderBottomRightRadius
  borderCollapse: TBorderCollapse
  borderEndEndRadius: TBorderEndEndRadius
  borderEndStartRadius: TBorderEndStartRadius
  borderImage: TBorderImage
  borderInline: TBorderInline
  borderInlineStart: TBorderInlineStart
  borderInlineEnd: TBorderInlineEnd
  borderLeft: TBorderLeft
  borderRadius: TBorderRadius
  borderRight: TBorderRight
  borderWidth: TBorderWidth
  borderStyle: TBorderStyle | TBorderStyle[]
  borderStartEndRadius: TBorderStartEndRadius
  borderStartStartRadius: TBorderStartStartRadius
  borderTop: TBorderTop
  borderTopLeftRadius: TBorderTopLeftRadius
  borderTopRightRadius: TBorderTopRightRadius
  bottom: TBottom
  display: TDisplay
  boxShadow: TBoxShadow
  boxSizing: TBoxSizing
  breakAfter: TBreakAfter
  breakBefore: TBreakBefore
  breakInside: TBreakInside
  captionSide: TCaptionSide
  caretColor: TCaretColor
  clear: TClear
  clip: TClip
  clipPath: TClipPath
  color: TColor
  colorInterpolation: TColorInterpolation
  colorInterpolationFilters: TColorInterpolationFilters
  colorScheme: TColorScheme
  columnCount: TColumnCount
  columnFill: TColumnFill
  columnGap: TColumnGap
  columnRule: TColumnRule
  columnSpan: TColumnSpan
  columnWidth: TColumnWidth
  contain: TContain
  containIntrinsicBlockSize: TContainIntrinsicBlockSize
  containIntrinsicHeight: TContainIntrinsicHeight
  containIntrinsicInlineSize: TContainIntrinsicInlineSize
  containIntrinsicSize: TContainIntrinsicSize
  containIntrinsicWidth: TContainIntrinsicWidth
  container: TContainer
  content: TContent
  contentVisibility: TContentVisibility
  counterIncrement: TCounterIncrement
  counterReset: TCounterReset
  counterSet: TCounterSet
  cursor: TCursor
  cx: TCx
  cy: TCy
  d: TD
  direction: TDirection
  dominantBaseline: TDominantBaseline
  emptyCells: TEmptyCells
  flex: TFlex
  flexBasis: TFlexBasis
  flexDirection: TFlexDirection
  flexGrow: TFlexGrow
  flexShrink: TFlexShrink
  fontVariant: TFontVariant
  fontWeight: TFontWeight
  flexWrap: TFlexWrap
  fieldSizing: TFieldSizing
  fill: TFill
  fillOpacity: TFillOpacity
  fillRule: TFillRule
  filter: TFilter
  float: TFloat
  floodColor: TFloodColor
  floodOpacity: TFloodOpacity
  font: TFont
  fontFamily: TFontFamily
  fontSize: TFontSize
  fontStretch: TFontStretch
  fontStyle: TFontStyle
  fontFeatureSettings: TFontFeatureSettings
  fontKerning: TFontKerning
  fontLanguageOverride: TFontLanguageOverride
  fontOpticalSizing: TFontOpticalSizing
  fontPalette: TFontPalette
  fontSizeAdjust: TFontSizeAdjust
  fontSynthesisSmallCaps: TFontSynthesisSmallCaps
  fontSynthesisStyle: TFontSynthesisStyle
  fontSynthesisWeight: TFontSynthesisWeight
  fontVariantAlternates: TFontVariantAlternates
  fontVariantCaps: TFontVariantCaps
  fontVariantEastAsian: TFontVariantEastAsian
  fontVariantLigatures: TFontVariantLigatures
  fontVariantNumeric: TFontVariantNumeric
  fontVariantPosition: TFontVariantPosition
  fontVariationSettings: TFontVariationSettings
  forcedColorAdjust: TForcedColorAdjust
  gap: TGap
  gridAutoColumns: TGridAutoColumns
  gridAutoFlow: TGridAutoFlow
  gridAutoRows: TGridAutoRows
  gridColumn: TGridColumn
  gridRow: TGridRow
  gridTemplate: TGridTemplate
  gridTemplateColumns: TGridTemplateColumns
  gridTemplateRows: TGridTemplateRows
  gridTemplateAreas: TGridTemplateAreas
  height: THeight
  hyphenateCharacter: THyphenateCharacter
  hyphens: THyphens
  imageOrientation: TImageOrientation
  imageRendering: TImageRendering
  inlineSize: TInlineSize
  inset: TInset
  insetBlock: TInsetBlock
  insetInline: TInsetInline
  isolation: TIsolation
  justifyContent: TJustifyContent
  justifyItems: TJustifyItems
  justifySelf: TJustifySelf
  left: TLeft
  right: TRight
  top: TTop
  letterSpacing: TLetterSpacing
  lightingColor: TLightingColor
  lineBreak: TLineBreak
  lineHeight: TLineHeight
  listStyle: TListStyle
  margin: TMargin
  marginBlock: TMarginBlock
  marginInline: TMarginInline
  mask: TMask
  maskClip: TMaskClip
  mathStyle: TMathStyle
  maxBlockSize: TMaxBlockSize
  maxHeight: TMaxHeight
  maxInlineSize: TMaxInlineSize
  maxWidth: TMaxWidth
  minBlockSize: TMinBlockSize
  minHeight: TMinHeight
  minInlineSize: TMinInlineSize
  minWidth: TMinWidth
  mixBlendMode: TMixBlendMode
  objectFit: TObjectFit
  objectPosition: TObjectPosition
  offset: TOffset
  offsetAnchor: TOffsetAnchor
  opacity: TOpacity
  order: TOrder
  outline: TOutline
  outlineOffset: TOutlineOffset
  overflow: TOverflow
  overscrollBehavior: TOverscrollBehavior
  overscrollBehaviorBlock: TOverscrollBehaviorBlock
  overscrollBehaviorInline: TOverscrollBehaviorInline
  padding: TPadding
  perspective: TPerspective
  perspectiveOrigin: TPerspectiveOrigin
  placeContent: TPlaceContent
  placeItems: TPlaceItems
  placeSelf: TPlaceSelf
  pointerEvents: TPointerEvents
  position: TPosition
  quotes: TQuotes
  resize: TResize
  rotate: TRotate
  rubyAlign: TRubyAlign
  rubyPosition: TRubyPosition
  scale: TScale
  scrollBehavior: TScrollBehavior
  scrollMargin: TScrollMargin
  scrollPadding: TScrollPadding
  scrollSnapAlign: TScrollSnapAlign
  scrollSnapStop: TScrollSnapStop
  scrollSnapType: TScrollSnapType
  scrollTimeline: TScrollTimeline
  scrollTimelineAxis: TScrollTimelineAxis
  scrollTimelineName: TScrollTimelineName
  scrollbarColor: TScrollbarColor
  scrollbarGutter: TScrollbarGutter
  scrollbarWidth: TScrollbarWidth
  shapeImageThreshold: TShapeImageThreshold
  shapeMargin: TShapeMargin
  shapeOutside: TShapeOutside
  shapeRendering: TShapeRendering
  stopColor: TStopColor
  stopOpacity: TStopOpacity
  stroke: TStroke
  strokeDasharray: TStrokeDasharray
  strokeDashoffset: TStrokeDashoffset
  strokeLinecap: TStrokeLinecap
  strokeLinejoin: TStrokeLinejoin
  strokeMiterlimit: TStrokeMiterlimit
  strokeOpacity: TStrokeOpacity
  strokeWidth: TStrokeWidth
  tabSize: TTabSize
  tableLayout: TTableLayout
  textAlign: TTextAlign
  textAlignLast: TTextAlignLast
  textAnchor: TTextAnchor
  textCombineUpright: TTextCombineUpright
  textDecoration: TTextDecoration
  textEmphasis: TTextEmphasis
  textIndent: TTextIndent
  textJustify: TTextJustify
  textOrientation: TTextOrientation
  textOverflow: TTextOverflow
  textRendering: TTextRendering
  textShadow: TTextShadow
  textTransform: TTextTransform
  textUnderlineOffset: TTextUnderlineOffset
  textUnderlinePosition: TTextUnderlinePosition
  textWrap: TTextWrap
  textWrapStyle: TTextWrapStyle
  touchAction: TTouchAction
  transform: TTransform
  transformBox: TTransformBox
  transformOrigin: TTransformOrigin
  transformStyle: TTransformStyle
  transition: TTransition
  transitionBehavior: TTransitionBehavior
  translate: TTranslate
  userSelect: TUserSelect
  vectorEffect: TVectorEffect
  verticalAlign: TVerticalAlign
  visibility: TVisibility
  whiteSpace: TWhiteSpace
  width: TWidth
  willChange: TWillChange
  wordBreak: TWordBreak
  wordSpacing: TWordSpacing
  writingMode: TWritingMode
  zIndex: TZIndex
  zoom: TZoom
}>

type TResponsive = {
  mobile?: TCSSPropValue
  tablet?: TCSSPropValue
  desktop?: TCSSPropValue
  className?: string
}

export type TStyle = {
  className?: string
  env?: TEnv
  theme?: TThemeColor
  styleAsString?: boolean
} & TResponsive

// Define a mapping of keys to their respective normalizer functions
export const propertyMap: Record<
  keyof TCSSPropValue,
  {
    className: Record<TEnv, string>
    normalize: (value: any) => string | number
  }
> = {
  accentColor: {
    className: {
      development: 'accent-color',
      test: 'acc',
      production: 'acc',
    },
    normalize: normalizeAccentColor,
  },
  alignContent: {
    className: {
      development: 'align-content',
      test: 'ac',
      production: 'ac',
    },
    normalize: normalizeAlignContent,
  },
  alignItems: {
    className: {
      development: 'align-items',
      test: 'ai',
      production: 'ai',
    },
    normalize: normalizeAlignItems,
  },
  alignSelf: {
    className: {
      development: 'align-self',
      test: 'as',
      production: 'as',
    },
    normalize: normalizeAlignSelf,
  },
  animation: {
    className: {
      development: 'animation',
      test: 'a',
      production: 'a',
    },
    normalize: normalizeAnimation,
  },
  appearance: {
    className: {
      development: 'appearance',
      test: 'ap',
      production: 'ap',
    },
    normalize: normalizeAppearance,
  },
  aspectRatio: {
    className: {
      development: 'aspect-ratio',
      test: 'ar',
      production: 'ar',
    },
    normalize: normalizeAspectRatio,
  },
  backdropFilter: {
    className: {
      development: 'backdrop-filter',
      test: 'bf',
      production: 'bf',
    },
    normalize: normalizeBackdropFilter,
  },
  backfaceVisibility: {
    className: {
      development: 'backface-visibility',
      test: 'bv',
      production: 'bv',
    },
    normalize: normalizeBackfaceVisibility,
  },
  background: {
    className: {
      development: 'background',
      test: 'bg',
      production: 'bg',
    },
    normalize: normalizeBackground,
  },
  backgroundBlendMode: {
    className: {
      development: 'background-blend-mode',
      test: 'bbm',
      production: 'bbm',
    },
    normalize: normalizeBackgroundBlendMode,
  },
  backgroundClip: {
    className: {
      development: 'background-clip',
      test: 'bc',
      production: 'bc',
    },
    normalize: normalizeBackgroundClip,
  },
  backgroundOrigin: {
    className: {
      development: 'background-origin',
      test: 'bo',
      production: 'bo',
    },
    normalize: normalizeBackgroundOrigin,
  },
  blockSize: {
    className: {
      development: 'block-size',
      test: 'bz',
      production: 'bz',
    },
    normalize: normalizeBlockSize,
  },
  margin: {
    className: {
      development: 'margin',
      test: 'm',
      production: 'm',
    },
    normalize: normalizeMargin,
  },
  padding: {
    className: {
      development: 'padding',
      test: 'p',
      production: 'p',
    },
    normalize: normalizePadding,
  },
  border: {
    className: {
      development: 'border',
      test: 'b',
      production: 'b',
    },
    normalize: normalizeBorder,
  },
  borderBlock: {
    className: {
      development: 'border-block',
      test: 'bb',
      production: 'bb',
    },
    normalize: normalizeBorderBlock,
  },
  borderBlockStart: {
    className: {
      development: 'border-block-start',
      test: 'bbs',
      production: 'bbs',
    },
    normalize: normalizeBorderBlockStart,
  },
  borderBottom: {
    className: {
      development: 'border-bottom',
      test: 'bbt',
      production: 'bbt',
    },
    normalize: normalizeBorderBottom,
  },
  borderBottomLeftRadius: {
    className: {
      development: 'border-bottom-left-radius',
      test: 'bblr',
      production: 'bblr',
    },
    normalize: normalizeBorderBottomLeftRadius,
  },
  borderBottomRightRadius: {
    className: {
      development: 'border-bottom-right-radius',
      test: 'bbrr',
      production: 'bbrr',
    },
    normalize: normalizeBorderBottomRightRadius,
  },
  borderBlockEnd: {
    className: {
      development: 'border-block-end',
      test: 'bbe',
      production: 'bbe',
    },
    normalize: normalizeBorderBlockEnd,
  },
  borderCollapse: {
    className: {
      development: 'border-collapse',
      test: 'bdc',
      production: 'bdc',
    },
    normalize: normalizeBorderCollapse,
  },
  borderEndEndRadius: {
    className: {
      development: 'border-end-end-radius',
      test: 'beer',
      production: 'beer',
    },
    normalize: normalizeBorderEndEndRadius,
  },
  borderEndStartRadius: {
    className: {
      development: 'border-end-start-radius',
      test: 'besr',
      production: 'besr',
    },
    normalize: normalizeBorderEndStartRadius,
  },
  borderImage: {
    className: {
      development: 'border-image',
      test: 'bim',
      production: 'bim',
    },
    normalize: normalizeBorderImage,
  },
  borderInline: {
    className: {
      development: 'border-inline',
      test: 'bi',
      production: 'bi',
    },
    normalize: normalizeBorderInlineEnd,
  },
  borderLeft: {
    className: {
      development: 'border-left',
      test: 'bl',
      production: 'bl',
    },
    normalize: normalizeBorderLeft,
  },
  borderInlineStart: {
    className: {
      development: 'border-inline-start',
      test: 'bis',
      production: 'bis',
    },
    normalize: normalizeBorderInlineStart,
  },
  borderInlineEnd: {
    className: {
      development: 'border-inline-end',
      test: 'bie',
      production: 'bie',
    },
    normalize: normalizeBorderInlineEnd,
  },
  borderRadius: {
    className: {
      development: 'border-radius',
      test: 'bra',
      production: 'bra',
    },
    normalize: normalizeBorderRadius,
  },
  borderRight: {
    className: {
      development: 'border-right',
      test: 'br',
      production: 'br',
    },
    normalize: normalizeBorderRight,
  },
  borderWidth: {
    className: {
      development: 'border-width',
      test: 'bw',
      production: 'bw',
    },
    normalize: normalizeBorderWidth,
  },
  borderStyle: {
    className: {
      development: 'border-style',
      test: 'bds',
      production: 'bds',
    },
    normalize: normalizeBorderStyle,
  },
  borderStartEndRadius: {
    className: {
      development: 'border-start-end-radius',
      test: 'bser',
      production: 'bser',
    },
    normalize: normalizeBorderStartEndRadius,
  },
  borderStartStartRadius: {
    className: {
      development: 'border-start-start-radius',
      test: 'bssr',
      production: 'bssr',
    },
    normalize: normalizeBorderStartStartRadius,
  },
  borderTop: {
    className: {
      development: 'border-top',
      test: 'bdt',
      production: 'bdt',
    },
    normalize: normalizeBorderTop,
  },
  borderTopLeftRadius: {
    className: {
      development: 'border-top-left-radius',
      test: 'btlr',
      production: 'btlr',
    },
    normalize: normalizeBorderTopLeftRadius,
  },
  borderTopRightRadius: {
    className: {
      development: 'border-top-right-radius',
      test: 'btrr',
      production: 'btrr',
    },
    normalize: normalizeBorderTopRightRadius,
  },
  bottom: {
    className: {
      development: 'bottom',
      test: 'bt',
      production: 'bt',
    },
    normalize: normalizeBottom,
  },
  boxShadow: {
    className: {
      development: 'box-shadow',
      test: 'bs',
      production: 'bs',
    },
    normalize: normalizeBoxShadow,
  },
  boxSizing: {
    className: {
      development: 'box-sizing',
      test: 'bsz',
      production: 'bsz',
    },
    normalize: normalizeBoxSizing,
  },
  breakAfter: {
    className: {
      development: 'break-after',
      test: 'ba',
      production: 'ba',
    },
    normalize: normalizeBreakAfter,
  },
  breakBefore: {
    className: {
      development: 'break-before',
      test: 'bbf',
      production: 'bbf',
    },
    normalize: normalizeBreakBefore,
  },
  breakInside: {
    className: {
      development: 'break-inside',
      test: 'bbi',
      production: 'bbi',
    },
    normalize: normalizeBreakInside,
  },

  captionSide: {
    className: {
      development: 'caption-side',
      test: 'cps',
      production: 'cps',
    },
    normalize: normalizeCaptionSide,
  },
  caretColor: {
    className: {
      development: 'caret-color',
      test: 'crc',
      production: 'crc',
    },
    normalize: normalizeCaretColor,
  },
  clear: {
    className: {
      development: 'clear',
      test: 'clr',
      production: 'clr',
    },
    normalize: normalizeClear,
  },
  clip: {
    className: {
      development: 'clip',
      test: 'cl',
      production: 'cl',
    },
    normalize: normalizeClip,
  },
  clipPath: {
    className: {
      development: 'clip-path',
      test: 'clp',
      production: 'clp',
    },
    normalize: normalizeClipPath,
  },
  color: {
    className: {
      development: 'color',
      test: 'c',
      production: 'c',
    },
    normalize: normalizeColor,
  },
  colorInterpolation: {
    className: {
      development: 'color-interpolation',
      test: 'ci',
      production: 'ci',
    },
    normalize: normalizeColorInterpolation,
  },
  colorInterpolationFilters: {
    className: {
      development: 'color-interpolation-filters',
      test: 'cif',
      production: 'cif',
    },
    normalize: normalizeColorInterpolationFilters,
  },
  colorScheme: {
    className: {
      development: 'color-scheme',
      test: 'cs',
      production: 'cs',
    },
    normalize: normalizeColorScheme,
  },
  columnCount: {
    className: {
      development: 'column-count',
      test: 'cc',
      production: 'cc',
    },
    normalize: normalizeColumnCount,
  },
  columnFill: {
    className: {
      development: 'column-fill',
      test: 'cf',
      production: 'cf',
    },
    normalize: normalizeColumnFill,
  },
  columnGap: {
    className: {
      development: 'column-gap',
      test: 'cg',
      production: 'cg',
    },
    normalize: normalizeColumnGap,
  },
  columnRule: {
    className: {
      development: 'column-rule',
      test: 'cr',
      production: 'cr',
    },
    normalize: normalizeColumnRule,
  },
  columnSpan: {
    className: {
      development: 'column-span',
      test: 'csp',
      production: 'csp',
    },
    normalize: normalizeColumnSpan,
  },
  columnWidth: {
    className: {
      development: 'column-width',
      test: 'cw',
      production: 'cw',
    },
    normalize: normalizeColumnWidth,
  },
  contain: {
    className: {
      development: 'contain',
      test: 'ctn',
      production: 'ctn',
    },
    normalize: normalizeContain,
  },
  containIntrinsicBlockSize: {
    className: {
      development: 'contain-intrinsic-block-size',
      test: 'cib',
      production: 'cib',
    },
    normalize: normalizeContainIntrinsicBlockSize,
  },
  containIntrinsicHeight: {
    className: {
      development: 'contain-intrinsic-height',
      test: 'cih',
      production: 'cih',
    },
    normalize: normalizeContainIntrinsicHeight,
  },
  containIntrinsicInlineSize: {
    className: {
      development: 'contain-intrinsic-inline-size',
      test: 'ciis',
      production: 'ciis',
    },
    normalize: normalizeContainIntrinsicInlineSize,
  },
  containIntrinsicSize: {
    className: {
      development: 'contain-intrinsic-size',
      test: 'cis',
      production: 'cis',
    },
    normalize: normalizeContainIntrinsicSize,
  },
  containIntrinsicWidth: {
    className: {
      development: 'contain-intrinsic-width',
      test: 'ciw',
      production: 'ciw',
    },
    normalize: normalizeContainIntrinsicWidth,
  },
  container: {
    className: {
      development: 'container',
      test: 'cn',
      production: 'cn',
    },
    normalize: normalizeContainer,
  },
  content: {
    className: {
      development: 'content',
      test: 'cnt',
      production: 'cnt',
    },
    normalize: normalizeContent,
  },
  contentVisibility: {
    className: {
      development: 'content-visibility',
      test: 'cv',
      production: 'cv',
    },
    normalize: normalizeContentVisibility,
  },
  counterIncrement: {
    className: {
      development: 'counter-increment',
      test: 'cin',
      production: 'cin',
    },
    normalize: normalizeCounterIncrement,
  },
  counterReset: {
    className: {
      development: 'counter-reset',
      test: 'cre',
      production: 'cre',
    },
    normalize: normalizeCounterReset,
  },
  counterSet: {
    className: {
      development: 'counter-set',
      test: 'cse',
      production: 'cse',
    },
    normalize: normalizeCounterSet,
  },
  cursor: {
    className: {
      development: 'cursor',
      test: 'cur',
      production: 'cur',
    },
    normalize: normalizeCursor,
  },
  cx: {
    className: {
      development: 'cx',
      test: 'cx',
      production: 'cx',
    },
    normalize: normalizeCx,
  },
  cy: {
    className: {
      development: 'cy',
      test: 'cy',
      production: 'cy',
    },
    normalize: normalizeCy,
  },
  d: {
    className: {
      development: 'd',
      test: 'd',
      production: 'd',
    },
    normalize: normalizeD,
  },
  direction: {
    className: {
      development: 'direction',
      test: 'dir',
      production: 'dir',
    },
    normalize: normalizeDirection,
  },
  dominantBaseline: {
    className: {
      development: 'dominant-baseline',
      test: 'db',
      production: 'db',
    },
    normalize: normalizeDominantBaseline,
  },
  emptyCells: {
    className: {
      development: 'empty-cells',
      test: 'ec',
      production: 'ec',
    },
    normalize: normalizeEmptyCells,
  },
  display: {
    className: {
      development: 'display',
      test: 'ds',
      production: 'ds',
    },
    normalize: normalizeDisplay,
  },
  flex: {
    className: {
      development: 'flex',
      test: 'fx',
      production: 'fx',
    },
    normalize: normalizeFlex,
  },
  flexBasis: {
    className: {
      development: 'flex-basis',
      test: 'fb',
      production: 'fb',
    },
    normalize: normalizeFlexBasis,
  },
  flexDirection: {
    className: {
      development: 'flex-direction',
      test: 'fd',
      production: 'fd',
    },
    normalize: normalizeFlexDirection,
  },
  flexGrow: {
    className: {
      development: 'flex-grow',
      test: 'fg',
      production: 'fg',
    },
    normalize: normalizeFlexGrow,
  },
  flexShrink: {
    className: {
      development: 'flex-shrink',
      test: 'fsh',
      production: 'fsh',
    },
    normalize: normalizeFlexShrink,
  },
  fontVariant: {
    className: {
      development: 'font-variant',
      test: 'fv',
      production: 'fv',
    },
    normalize: normalizeFontVariant,
  },
  fontWeight: {
    className: {
      development: 'font-weight',
      test: 'fw',
      production: 'fw',
    },
    normalize: normalizeFontWeight,
  },
  flexWrap: {
    className: {
      development: 'flex-wrap',
      test: 'fwr',
      production: 'fwr',
    },
    normalize: normalizeFlexWrap,
  },
  fieldSizing: {
    className: {
      development: 'field-sizing',
      test: 'fiz',
      production: 'fiz',
    },
    normalize: normalizeFieldSizing,
  },
  fill: {
    className: {
      development: 'fill',
      test: 'fl',
      production: 'fl',
    },
    normalize: normalizeFill,
  },
  fillOpacity: {
    className: {
      development: 'fill-opacity',
      test: 'fop',
      production: 'fop',
    },
    normalize: normalizeFillOpacity,
  },
  fillRule: {
    className: {
      development: 'fill-rule',
      test: 'fr',
      production: 'fr',
    },
    normalize: normalizeFillRule,
  },
  filter: {
    className: {
      development: 'filter',
      test: 'fil',
      production: 'fil',
    },
    normalize: normalizeFilter,
  },
  float: {
    className: {
      development: 'float',
      test: 'flo',
      production: 'flo',
    },
    normalize: normalizeFloat,
  },
  floodColor: {
    className: {
      development: 'flood-color',
      test: 'fc',
      production: 'fc',
    },
    normalize: normalizeFloodColor,
  },
  floodOpacity: {
    className: {
      development: 'flood-opacity',
      test: 'fo',
      production: 'fo',
    },
    normalize: normalizeFloodOpacity,
  },
  font: {
    className: {
      development: 'font',
      test: 'fnt',
      production: 'fnt',
    },
    normalize: normalizeFont,
  },
  fontFamily: {
    className: {
      development: 'font-family',
      test: 'ff',
      production: 'ff',
    },
    normalize: normalizeFontFamily,
  },
  fontSize: {
    className: {
      development: 'font-size',
      test: 'fz',
      production: 'fz',
    },
    normalize: normalizeFontSize,
  },
  fontStretch: {
    className: {
      development: 'font-stretch',
      test: 'fst',
      production: 'fst',
    },
    normalize: normalizeFontStretch,
  },
  fontStyle: {
    className: {
      development: 'font-style',
      test: 'fs',
      production: 'fs',
    },
    normalize: normalizeFontStyle,
  },
  fontFeatureSettings: {
    className: {
      development: 'font-feature-settings',
      test: 'ffs',
      production: 'ffs',
    },
    normalize: normalizeFontFeatureSettings,
  },
  fontKerning: {
    className: {
      development: 'font-kerning',
      test: 'fk',
      production: 'fk',
    },
    normalize: normalizeFontKerning,
  },
  fontLanguageOverride: {
    className: {
      development: 'font-language-override',
      test: 'flov',
      production: 'flov',
    },
    normalize: normalizeFontLanguageOverride,
  },
  fontOpticalSizing: {
    className: {
      development: 'font-optical-sizing',
      test: 'fos',
      production: 'fos',
    },
    normalize: normalizeFontOpticalSizing,
  },
  fontPalette: {
    className: {
      development: 'font-palette',
      test: 'fp',
      production: 'fp',
    },
    normalize: normalizeFontPalette,
  },
  fontSizeAdjust: {
    className: {
      development: 'font-size-adjust',
      test: 'fsa',
      production: 'fsa',
    },
    normalize: normalizeFontSizeAdjust,
  },
  fontSynthesisSmallCaps: {
    className: {
      development: 'font-synthesis-small-caps',
      test: 'fssc',
      production: 'fssc',
    },
    normalize: normalizeFontSynthesisSmallCaps,
  },
  fontSynthesisStyle: {
    className: {
      development: 'font-synthesis-style',
      test: 'fss',
      production: 'fss',
    },
    normalize: normalizeFontSynthesisStyle,
  },
  fontSynthesisWeight: {
    className: {
      development: 'font-synthesis-weight',
      test: 'fsw',
      production: 'fsw',
    },
    normalize: normalizeFontSynthesisWeight,
  },
  fontVariantAlternates: {
    className: {
      development: 'font-variant-alternates',
      test: 'fva',
      production: 'fva',
    },
    normalize: normalizeFontVariantAlternates,
  },
  fontVariantCaps: {
    className: {
      development: 'font-variant-caps',
      test: 'fvc',
      production: 'fvc',
    },
    normalize: normalizeFontVariantCaps,
  },
  fontVariantEastAsian: {
    className: {
      development: 'font-variant-east-asian',
      test: 'fvea',
      production: 'fvea',
    },
    normalize: normalizeFontVariantEastAsian,
  },
  fontVariantLigatures: {
    className: {
      development: 'font-variant-ligatures',
      test: 'fvl',
      production: 'fvl',
    },
    normalize: normalizeFontVariantLigatures,
  },
  fontVariantNumeric: {
    className: {
      development: 'font-variant-numeric',
      test: 'fvn',
      production: 'fvn',
    },
    normalize: normalizeFontVariantNumeric,
  },
  fontVariantPosition: {
    className: {
      development: 'font-variant-position',
      test: 'fvp',
      production: 'fvp',
    },
    normalize: normalizeFontVariantPosition,
  },
  fontVariationSettings: {
    className: {
      development: 'font-variation-settings',
      test: 'fvs',
      production: 'fvs',
    },
    normalize: normalizeFontVariationSettings,
  },
  forcedColorAdjust: {
    className: {
      development: 'forced-color-adjust',
      test: 'fca',
      production: 'fca',
    },
    normalize: normalizeForcedColorAdjust,
  },
  gap: {
    className: {
      development: 'gap',
      test: 'gp',
      production: 'gp',
    },
    normalize: normalizeGap,
  },
  gridAutoColumns: {
    className: {
      development: 'grid-auto-columns',
      test: 'gac',
      production: 'gac',
    },
    normalize: normalizeGridAutoColumns,
  },
  gridAutoFlow: {
    className: {
      development: 'grid-auto-flow',
      test: 'gaf',
      production: 'gaf',
    },
    normalize: normalizeGridAutoFlow,
  },
  gridAutoRows: {
    className: {
      development: 'grid-auto-rows',
      test: 'gar',
      production: 'gar',
    },
    normalize: normalizeGridAutoRows,
  },
  gridColumn: {
    className: {
      development: 'grid-column',
      test: 'gc',
      production: 'gc',
    },
    normalize: normalizeGridColumn,
  },
  gridRow: {
    className: {
      development: 'grid-row',
      test: 'gr',
      production: 'gr',
    },
    normalize: normalizeGridRow,
  },
  gridTemplate: {
    className: {
      development: 'grid-template',
      test: 'gt',
      production: 'gt',
    },
    normalize: normalizeGridTemplate,
  },
  gridTemplateColumns: {
    className: {
      development: 'grid-template-columns',
      test: 'gtc',
      production: 'gtc',
    },
    normalize: normalizeGridTemplateColumns,
  },
  gridTemplateRows: {
    className: {
      development: 'grid-template-rows',
      test: 'gtr',
      production: 'gtr',
    },
    normalize: normalizeGridTemplateRows,
  },
  gridTemplateAreas: {
    className: {
      development: 'grid-template-areas',
      test: 'gta',
      production: 'gta',
    },
    normalize: normalizeGridTemplateAreas,
  },
  height: {
    className: {
      development: 'height',
      test: 'h',
      production: 'h',
    },
    normalize: normalizeHeight,
  },
  hyphenateCharacter: {
    className: {
      development: 'hyphenate-character',
      test: 'hc',
      production: 'hc',
    },
    normalize: normalizeHyphenateCharacter,
  },
  hyphens: {
    className: {
      development: 'hyphens',
      test: 'hy',
      production: 'hy',
    },
    normalize: normalizeHyphens,
  },
  imageOrientation: {
    className: {
      development: 'image-orientation',
      test: 'io',
      production: 'io',
    },
    normalize: normalizeImageOrientation,
  },
  imageRendering: {
    className: {
      development: 'image-rendering',
      test: 'ir',
      production: 'ir',
    },
    normalize: normalizeImageRendering,
  },
  inlineSize: {
    className: {
      development: 'inline-size',
      test: 'is',
      production: 'is',
    },
    normalize: normalizeInlineSize,
  },
  inset: {
    className: {
      development: 'inset',
      test: 'i',
      production: 'i',
    },
    normalize: normalizeInset,
  },
  insetBlock: {
    className: {
      development: 'inset-block',
      test: 'ib',
      production: 'ib',
    },
    normalize: normalizeInsetBlock,
  },
  insetInline: {
    className: {
      development: 'inset-inline',
      test: 'ii',
      production: 'ii',
    },
    normalize: normalizeInsetInline,
  },
  isolation: {
    className: {
      development: 'isolation',
      test: 'iso',
      production: 'iso',
    },
    normalize: normalizeIsolation,
  },
  justifyContent: {
    className: {
      development: 'justify-content',
      test: 'jc',
      production: 'jc',
    },
    normalize: normalizeJustifyContent,
  },
  justifyItems: {
    className: {
      development: 'justify-items',
      test: 'ji',
      production: 'ji',
    },
    normalize: normalizeJustifyItems,
  },
  justifySelf: {
    className: {
      development: 'justify-self',
      test: 'js',
      production: 'js',
    },
    normalize: normalizeJustifySelf,
  },
  left: {
    className: {
      development: 'left',
      test: 'lf',
      production: 'lf',
    },
    normalize: normalizeLeft,
  },
  right: {
    className: {
      development: 'right',
      test: 'r',
      production: 'r',
    },
    normalize: normalizeRight,
  },
  top: {
    className: {
      development: 'top',
      test: 'tp',
      production: 'tp',
    },
    normalize: normalizeTop,
  },
  letterSpacing: {
    className: {
      development: 'letter-spacing',
      test: 'ls',
      production: 'ls',
    },
    normalize: normalizeLetterSpacing,
  },
  lightingColor: {
    className: {
      development: 'lighting-color',
      test: 'lc',
      production: 'lc',
    },
    normalize: normalizeLightingColor,
  },
  lineBreak: {
    className: {
      development: 'line-break',
      test: 'lb',
      production: 'lb',
    },
    normalize: normalizeLineBreak,
  },
  lineHeight: {
    className: {
      development: 'line-height',
      test: 'lh',
      production: 'lh',
    },
    normalize: normalizeLineHeight,
  },
  listStyle: {
    className: {
      development: 'list-style',
      test: 'lst',
      production: 'lst',
    },
    normalize: normalizeListStyle,
  },
  marginBlock: {
    className: {
      development: 'margin-block',
      test: 'mb',
      production: 'mb',
    },
    normalize: normalizeMarginBlock,
  },
  marginInline: {
    className: {
      development: 'margin-inline',
      test: 'mi',
      production: 'mi',
    },
    normalize: normalizeMarginInline,
  },
  mask: {
    className: {
      development: 'mask',
      test: 'mk',
      production: 'mk',
    },
    normalize: normalizeMask,
  },
  maskClip: {
    className: {
      development: 'mask-clip',
      test: 'mc',
      production: 'mc',
    },
    normalize: normalizeMaskClip,
  },
  mathStyle: {
    className: {
      development: 'math-style',
      test: 'ms',
      production: 'ms',
    },
    normalize: normalizeMathStyle,
  },
  maxBlockSize: {
    className: {
      development: 'max-block-size',
      test: 'mxbs',
      production: 'mxbs',
    },
    normalize: normalizeMaxBlockSize,
  },
  maxHeight: {
    className: {
      development: 'max-height',
      test: 'mxh',
      production: 'mxh',
    },
    normalize: normalizeMaxHeight,
  },
  maxInlineSize: {
    className: {
      development: 'max-inline-size',
      test: 'mxis',
      production: 'mxis',
    },
    normalize: normalizeMaxInlineSize,
  },
  maxWidth: {
    className: {
      development: 'max-width',
      test: 'mxw',
      production: 'mxw',
    },
    normalize: normalizeMaxWidth,
  },
  minBlockSize: {
    className: {
      development: 'min-block-size',
      test: 'mibs',
      production: 'mibs',
    },
    normalize: normalizeMinBlockSize,
  },
  minHeight: {
    className: {
      development: 'min-height',
      test: 'mih',
      production: 'mih',
    },
    normalize: normalizeMinHeight,
  },
  minInlineSize: {
    className: {
      development: 'min-inline-size',
      test: 'miis',
      production: 'miis',
    },
    normalize: normalizeMinInlineSize,
  },
  minWidth: {
    className: {
      development: 'min-width',
      test: 'miw',
      production: 'miw',
    },
    normalize: normalizeMinWidth,
  },
  mixBlendMode: {
    className: {
      development: 'mix-blend-mode',
      test: 'mbm',
      production: 'mbm',
    },
    normalize: normalizeMixBlendMode,
  },
  objectFit: {
    className: {
      development: 'object-fit',
      test: 'of',
      production: 'of',
    },
    normalize: normalizeObjectFit,
  },
  objectPosition: {
    className: {
      development: 'object-position',
      test: 'op',
      production: 'op',
    },
    normalize: normalizeObjectPosition,
  },
  offsetAnchor: {
    className: {
      development: 'offset-anchor',
      test: 'oa',
      production: 'oa',
    },
    normalize: normalizeOffsetAnchor,
  },
  offset: {
    className: {
      development: 'offset',
      test: 'ofst',
      production: 'ofst',
    },
    normalize: normalizeOffset,
  },
  opacity: {
    className: {
      development: 'opacity',
      test: 'o',
      production: 'o',
    },
    normalize: normalizeOpacity,
  },
  order: {
    className: {
      development: 'order',
      test: 'or',
      production: 'or',
    },
    normalize: normalizeOrder,
  },
  outline: {
    className: {
      development: 'outline',
      test: 'ol',
      production: 'ol',
    },
    normalize: normalizeOutline,
  },
  outlineOffset: {
    className: {
      development: 'outline-offset',
      test: 'oo',
      production: 'oo',
    },
    normalize: normalizeOutlineOffset,
  },
  overflow: {
    className: {
      development: 'overflow',
      test: 'ov',
      production: 'ov',
    },
    normalize: normalizeOverflow,
  },
  overscrollBehavior: {
    className: {
      development: 'overscroll-behavior',
      test: 'osb',
      production: 'osb',
    },
    normalize: normalizeOverscrollBehavior,
  },
  overscrollBehaviorBlock: {
    className: {
      development: 'overscroll-behavior-block',
      test: 'osbb',
      production: 'osbb',
    },
    normalize: normalizeOverscrollBehaviorBlock,
  },
  overscrollBehaviorInline: {
    className: {
      development: 'overscroll-behavior-inline',
      test: 'osbi',
      production: 'osbi',
    },
    normalize: normalizeOverscrollBehaviorInline,
  },
  perspective: {
    className: {
      development: 'perspective',
      test: 'pp',
      production: 'pp',
    },
    normalize: normalizePerspective,
  },
  perspectiveOrigin: {
    className: {
      development: 'perspective-origin',
      test: 'po',
      production: 'po',
    },
    normalize: normalizePerspectiveOrigin,
  },
  placeContent: {
    className: {
      development: 'place-content',
      test: 'pc',
      production: 'pc',
    },
    normalize: normalizePlaceContent,
  },
  placeItems: {
    className: {
      development: 'place-items',
      test: 'pi',
      production: 'pi',
    },
    normalize: normalizePlaceItems,
  },
  placeSelf: {
    className: {
      development: 'place-self',
      test: 'ps',
      production: 'ps',
    },
    normalize: normalizePlaceSelf,
  },
  pointerEvents: {
    className: {
      development: 'pointer-events',
      test: 'pe',
      production: 'pe',
    },
    normalize: normalizePointerEvents,
  },
  position: {
    className: {
      development: 'position',
      test: 'pos',
      production: 'pos',
    },
    normalize: normalizePosition,
  },
  quotes: {
    className: {
      development: 'quotes',
      test: 'q',
      production: 'q',
    },
    normalize: normalizeQuotes,
  },
  resize: {
    className: {
      development: 'resize',
      test: 'rs',
      production: 'rs',
    },
    normalize: normalizeResize,
  },
  rotate: {
    className: {
      development: 'rotate',
      test: 'rt',
      production: 'rt',
    },
    normalize: normalizeRotate,
  },
  rubyAlign: {
    className: {
      development: 'ruby-align',
      test: 'ra',
      production: 'ra',
    },
    normalize: normalizeRubyAlign,
  },
  rubyPosition: {
    className: {
      development: 'ruby-position',
      test: 'rp',
      production: 'rp',
    },
    normalize: normalizeRubyPosition,
  },
  scale: {
    className: {
      development: 'scale',
      test: 's',
      production: 's',
    },
    normalize: normalizeScale,
  },
  scrollBehavior: {
    className: {
      development: 'scroll-behavior',
      test: 'sb',
      production: 'sb',
    },
    normalize: normalizeScrollBehavior,
  },
  scrollMargin: {
    className: {
      development: 'scroll-margin',
      test: 'sm',
      production: 'sm',
    },
    normalize: normalizeScrollMargin,
  },
  scrollPadding: {
    className: {
      development: 'scroll-padding',
      test: 'sp',
      production: 'sp',
    },
    normalize: normalizeScrollPadding,
  },
  scrollSnapAlign: {
    className: {
      development: 'scroll-snap-align',
      test: 'ssa',
      production: 'ssa',
    },
    normalize: normalizeScrollSnapAlign,
  },
  scrollSnapStop: {
    className: {
      development: 'scroll-snap-stop',
      test: 'sss',
      production: 'sss',
    },
    normalize: normalizeScrollSnapStop,
  },
  scrollSnapType: {
    className: {
      development: 'scroll-snap-type',
      test: 'sst',
      production: 'sst',
    },
    normalize: normalizeScrollSnapType,
  },
  scrollTimeline: {
    className: {
      development: 'scroll-timeline',
      test: 'st',
      production: 'st',
    },
    normalize: normalizeScrollTimeline,
  },
  scrollTimelineAxis: {
    className: {
      development: 'scroll-timeline-axis',
      test: 'sta',
      production: 'sta',
    },
    normalize: normalizeScrollTimelineAxis,
  },
  scrollTimelineName: {
    className: {
      development: 'scroll-timeline-name',
      test: 'stn',
      production: 'stn',
    },
    normalize: normalizeScrollTimelineName,
  },
  scrollbarColor: {
    className: {
      development: 'scrollbar-color',
      test: 'sc',
      production: 'sc',
    },
    normalize: normalizeScrollbarColor,
  },
  scrollbarGutter: {
    className: {
      development: 'scrollbar-gutter',
      test: 'sg',
      production: 'sg',
    },
    normalize: normalizeScrollbarGutter,
  },
  scrollbarWidth: {
    className: {
      development: 'scrollbar-width',
      test: 'sw',
      production: 'sw',
    },
    normalize: normalizeScrollbarWidth,
  },
  shapeImageThreshold: {
    className: {
      development: 'shape-image-threshold',
      test: 'sit',
      production: 'sit',
    },
    normalize: normalizeShapeImageThreshold,
  },
  shapeMargin: {
    className: {
      development: 'shape-margin',
      test: 'smg',
      production: 'smg',
    },
    normalize: normalizeShapeMargin,
  },
  shapeOutside: {
    className: {
      development: 'shape-outside',
      test: 'so',
      production: 'so',
    },
    normalize: normalizeShapeOutside,
  },
  shapeRendering: {
    className: {
      development: 'shape-rendering',
      test: 'sr',
      production: 'sr',
    },
    normalize: normalizeShapeRendering,
  },
  stopColor: {
    className: {
      development: 'stop-color',
      test: 'stc',
      production: 'stc',
    },
    normalize: normalizeStopColor,
  },
  stopOpacity: {
    className: {
      development: 'stop-opacity',
      test: 'sto',
      production: 'sto',
    },
    normalize: normalizeStopOpacity,
  },
  stroke: {
    className: {
      development: 'stroke',
      test: 'str',
      production: 'str',
    },
    normalize: normalizeStroke,
  },
  strokeDasharray: {
    className: {
      development: 'stroke-dasharray',
      test: 'sda',
      production: 'sda',
    },
    normalize: normalizeStrokeDasharray,
  },
  strokeDashoffset: {
    className: {
      development: 'stroke-dashoffset',
      test: 'sdo',
      production: 'sdo',
    },
    normalize: normalizeStrokeDashoffset,
  },
  strokeLinecap: {
    className: {
      development: 'stroke-linecap',
      test: 'slc',
      production: 'slc',
    },
    normalize: normalizeStrokeLinecap,
  },
  strokeLinejoin: {
    className: {
      development: 'stroke-linejoin',
      test: 'slj',
      production: 'slj',
    },
    normalize: normalizeStrokeLinejoin,
  },
  strokeMiterlimit: {
    className: {
      development: 'stroke-miterlimit',
      test: 'sml',
      production: 'sml',
    },
    normalize: normalizeStrokeMiterlimit,
  },
  strokeOpacity: {
    className: {
      development: 'stroke-opacity',
      test: 'sop',
      production: 'sop',
    },
    normalize: normalizeStrokeOpacity,
  },
  strokeWidth: {
    className: {
      development: 'stroke-width',
      test: 'swi',
      production: 'swi',
    },
    normalize: normalizeStrokeWidth,
  },
  tabSize: {
    className: {
      development: 'tab-size',
      test: 'txs',
      production: 'txs',
    },
    normalize: normalizeTabSize,
  },
  tableLayout: {
    className: {
      development: 'table-layout',
      test: 'tl',
      production: 'tl',
    },
    normalize: normalizeTableLayout,
  },
  textAlign: {
    className: {
      development: 'text-align',
      test: 'ta',
      production: 'ta',
    },
    normalize: normalizeTextAlign,
  },
  textAlignLast: {
    className: {
      development: 'text-align-last',
      test: 'tal',
      production: 'tal',
    },
    normalize: normalizeTextAlignLast,
  },
  textAnchor: {
    className: {
      development: 'text-anchor',
      test: 'tan',
      production: 'tan',
    },
    normalize: normalizeTextAnchor,
  },
  textCombineUpright: {
    className: {
      development: 'text-combine-upright',
      test: 'tcu',
      production: 'tcu',
    },
    normalize: normalizeTextCombineUpright,
  },
  textDecoration: {
    className: {
      development: 'text-decoration',
      test: 'td',
      production: 'td',
    },
    normalize: normalizeTextDecoration,
  },
  textEmphasis: {
    className: {
      development: 'text-emphasis',
      test: 'te',
      production: 'te',
    },
    normalize: normalizeTextEmphasis,
  },
  textIndent: {
    className: {
      development: 'text-indent',
      test: 'ti',
      production: 'ti',
    },
    normalize: normalizeTextIndent,
  },
  textJustify: {
    className: {
      development: 'text-justify',
      test: 'tj',
      production: 'tj',
    },
    normalize: normalizeTextJustify,
  },
  textOrientation: {
    className: {
      development: 'text-orientation',
      test: 'to',
      production: 'to',
    },
    normalize: normalizeTextOrientation,
  },
  textOverflow: {
    className: {
      development: 'text-overflow',
      test: 'tof',
      production: 'tof',
    },
    normalize: normalizeTextOverflow,
  },
  textRendering: {
    className: {
      development: 'text-rendering',
      test: 'tr',
      production: 'tr',
    },
    normalize: normalizeTextRendering,
  },
  textShadow: {
    className: {
      development: 'text-shadow',
      test: 'tsh',
      production: 'tsh',
    },
    normalize: normalizeTextShadow,
  },
  textTransform: {
    className: {
      development: 'text-transform',
      test: 'tt',
      production: 'tt',
    },
    normalize: normalizeTextTransform,
  },
  textUnderlineOffset: {
    className: {
      development: 'text-underline-offset',
      test: 'tuo',
      production: 'tuo',
    },
    normalize: normalizeTextUnderlineOffset,
  },
  textUnderlinePosition: {
    className: {
      development: 'text-underline-position',
      test: 'tup',
      production: 'tup',
    },
    normalize: normalizeTextUnderlinePosition,
  },
  textWrap: {
    className: {
      development: 'text-wrap',
      test: 'tw',
      production: 'tw',
    },
    normalize: normalizeTextWrap,
  },
  textWrapStyle: {
    className: {
      development: 'text-wrap-style',
      test: 'tws',
      production: 'tws',
    },
    normalize: normalizeTextWrapStyle,
  },
  touchAction: {
    className: {
      development: 'touch-action',
      test: 'toa',
      production: 'toa',
    },
    normalize: normalizeTouchAction,
  },
  transform: {
    className: {
      development: 'transform',
      test: 'tf',
      production: 'tf',
    },
    normalize: normalizeTransform,
  },
  transformBox: {
    className: {
      development: 'transform-box',
      test: 'tb',
      production: 'tb',
    },
    normalize: normalizeTransformBox,
  },
  transformOrigin: {
    className: {
      development: 'transform-origin',
      test: 'tro',
      production: 'tro',
    },
    normalize: normalizeTransformOrigin,
  },
  transformStyle: {
    className: {
      development: 'transform-style',
      test: 'ts',
      production: 'ts',
    },
    normalize: normalizeTransformStyle,
  },
  transition: {
    className: {
      development: 'transition',
      test: 'tra',
      production: 'tra',
    },
    normalize: normalizeTransition,
  },
  transitionBehavior: {
    className: {
      development: 'transition-behavior',
      test: 'tbe',
      production: 'tbe',
    },
    normalize: normalizeTransitionBehavior,
  },
  translate: {
    className: {
      development: 'translate',
      test: 't',
      production: 't',
    },
    normalize: normalizeTranslate,
  },
  userSelect: {
    className: {
      development: 'user-select',
      test: 'us',
      production: 'us',
    },
    normalize: normalizeUserSelect,
  },
  vectorEffect: {
    className: {
      development: 'vector-effect',
      test: 've',
      production: 've',
    },
    normalize: normalizeVectorEffect,
  },
  verticalAlign: {
    className: {
      development: 'vertical-align',
      test: 'va',
      production: 'va',
    },
    normalize: normalizeVerticalAlign,
  },
  visibility: {
    className: {
      development: 'visibility',
      test: 'vs',
      production: 'vs',
    },
    normalize: normalizeVisibility,
  },
  whiteSpace: {
    className: {
      development: 'white-space',
      test: 'ws',
      production: 'ws',
    },
    normalize: normalizeWhiteSpace,
  },
  width: {
    className: {
      development: 'width',
      test: 'w',
      production: 'w',
    },
    normalize: normalizeWidth,
  },
  willChange: {
    className: {
      development: 'will-change',
      test: 'wc',
      production: 'wc',
    },
    normalize: normalizeWillChange,
  },
  wordBreak: {
    className: {
      development: 'word-break',
      test: 'wb',
      production: 'wb',
    },
    normalize: normalizeWordBreak,
  },
  wordSpacing: {
    className: {
      development: 'word-spacing',
      test: 'wsp',
      production: 'wsp',
    },
    normalize: normalizeWordSpacing,
  },
  writingMode: {
    className: {
      development: 'writing-mode',
      test: 'wm',
      production: 'wm',
    },
    normalize: normalizeWritingMode,
  },
  zIndex: {
    className: {
      development: 'z-index',
      test: 'zi',
      production: 'zi',
    },
    normalize: normalizeZIndex,
  },
  zoom: {
    className: {
      development: 'zoom',
      test: 'zm',
      production: 'zm',
    },
    normalize: normalizeZoom,
  },
} as const
