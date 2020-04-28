
/// <reference path="event.d.ts" />

import * as CSS from 'csstype'
import Vue, { VNode } from "vue";
import { ComponentOptions } from 'vue/types/umd';



type NativeAnimationEvent = AnimationEvent;
type NativeClipboardEvent = ClipboardEvent;
type NativeCompositionEvent = CompositionEvent;
type NativeDragEvent = DragEvent;
type NativeFocusEvent = FocusEvent;
type NativeKeyboardEvent = KeyboardEvent;
type NativeMouseEvent = MouseEvent;
type NativeTouchEvent = TouchEvent;
type NativePointerEvent = PointerEvent;
type NativeTransitionEvent = TransitionEvent;
type NativeUIEvent = UIEvent;
type NativeWheelEvent = WheelEvent;
type Booleanish = boolean | 'true' | 'false';

declare class TsxVue<Props = {}> extends Vue {
    constructor(props: ComponentOptions<any> & ThisType<any> & Props & {
        scopedSlots?: {
            [key: string]: (value: any) => void
        }
    });
}

export = TsxVue;
export as namespace TsxVue;
declare namespace TsxVue {

    class Component<Props = {}> extends Vue {
        constructor(props: ComponentOptions<any> & ThisType<any> & Props);
    }

    interface CSSProperties extends CSS.Properties<string | number> {}

    interface ElementStyle{
        [prop: string]: CSSProperties
    }
    //
    // Event System
    // ----------------------------------------------------------------------
    // TODO: change any to unknown when moving to TS v3
    interface BaseSyntheticEvent<E = object, C = any, T = any> {
        nativeEvent: E;
        currentTarget: C;
        target: T;
        bubbles: boolean;
        cancelable: boolean;
        defaultPrevented: boolean;
        eventPhase: number;
        isTrusted: boolean;
        preventDefault(): void;
        isDefaultPrevented(): boolean;
        stopPropagation(): void;
        isPropagationStopped(): boolean;
        persist(): void;
        timeStamp: number;
        type: string;
    }

    
    interface AbstractView {
        styleMedia: StyleMedia;
        document: Document;
    }

    interface ClipboardEvent<T = Element> extends SyntheticEvent<T, NativeClipboardEvent> {
        clipboardData: DataTransfer;
    }

    interface CompositionEvent<T = Element> extends SyntheticEvent<T, NativeCompositionEvent> {
        data: string;
    }

    interface DragEvent<T = Element> extends MouseEvent<T, NativeDragEvent> {
        dataTransfer: DataTransfer;
    }

    interface PointerEvent<T = Element> extends MouseEvent<T, NativePointerEvent> {
        pointerId: number;
        pressure: number;
        tiltX: number;
        tiltY: number;
        width: number;
        height: number;
        pointerType: 'mouse' | 'pen' | 'touch';
        isPrimary: boolean;
    }

    interface FocusEvent<T = Element> extends SyntheticEvent<T, NativeFocusEvent> {
        relatedTarget: EventTarget | null;
        target: EventTarget & T;
    }

    // tslint:disable-next-line:no-empty-interface
    interface FormEvent<T = Element> extends SyntheticEvent<T> {
    }

    interface InvalidEvent<T = Element> extends SyntheticEvent<T> {
        target: EventTarget & T;
    }

    interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
        target: EventTarget & T;
    }

    interface KeyboardEvent<T = Element> extends SyntheticEvent<T, NativeKeyboardEvent> {
        altKey: boolean;
        charCode: number;
        ctrlKey: boolean;
        /**
         * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
         */
        getModifierState(key: string): boolean;
        /**
         * See the [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#named-key-attribute-values). for possible values
         */
        key: string;
        keyCode: number;
        locale: string;
        location: number;
        metaKey: boolean;
        repeat: boolean;
        shiftKey: boolean;
        which: number;
    }

    interface MouseEvent<T = Element, E = NativeMouseEvent> extends SyntheticEvent<T, E> {
        altKey: boolean;
        button: number;
        buttons: number;
        clientX: number;
        clientY: number;
        ctrlKey: boolean;
        /**
         * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
         */
        getModifierState(key: string): boolean;
        metaKey: boolean;
        movementX: number;
        movementY: number;
        pageX: number;
        pageY: number;
        relatedTarget: EventTarget | null;
        screenX: number;
        screenY: number;
        shiftKey: boolean;
    }

    interface TouchEvent<T = Element> extends SyntheticEvent<T, NativeTouchEvent> {
        altKey: boolean;
        changedTouches: TouchList;
        ctrlKey: boolean;
        /**
         * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
         */
        getModifierState(key: string): boolean;
        metaKey: boolean;
        shiftKey: boolean;
        targetTouches: TouchList;
        touches: TouchList;
    }

    interface UIEvent<T = Element> extends SyntheticEvent<T, NativeUIEvent> {
        detail: number;
        view: AbstractView;
    }

    interface WheelEvent<T = Element> extends MouseEvent<T, NativeWheelEvent> {
        deltaMode: number;
        deltaX: number;
        deltaY: number;
        deltaZ: number;
    }

    interface AnimationEvent<T = Element> extends SyntheticEvent<T, NativeAnimationEvent> {
        animationName: string;
        elapsedTime: number;
        pseudoElement: string;
    }

    interface TransitionEvent<T = Element> extends SyntheticEvent<T, NativeTransitionEvent> {
        elapsedTime: number;
        propertyName: string;
        pseudoElement: string;
    }

    interface SyntheticEvent<T = Element, E = Event> extends BaseSyntheticEvent<E, EventTarget & T, EventTarget> {}
    type EventHandler<E extends SyntheticEvent<any>> = { bivarianceHack(event: E): void }["bivarianceHack"];

    type ClipboardEventHandler<T = Element> = EventHandler<ClipboardEvent<T>>;
    type CompositionEventHandler<T = Element> = EventHandler<CompositionEvent<T>>;
    type DragEventHandler<T = Element> = EventHandler<DragEvent<T>>;
    type FocusEventHandler<T = Element> = EventHandler<FocusEvent<T>>;
    type FormEventHandler<T = Element> = EventHandler<FormEvent<T>>;
    type ChangeEventHandler<T = Element> = EventHandler<ChangeEvent<T>>;
    type KeyboardEventHandler<T = Element> = EventHandler<KeyboardEvent<T>>;
    type MouseEventHandler<T = Element> = EventHandler<MouseEvent<T>>;
    type TouchEventHandler<T = Element> = EventHandler<TouchEvent<T>>;
    type PointerEventHandler<T = Element> = EventHandler<PointerEvent<T>>;
    type UIEventHandler<T = Element> = EventHandler<UIEvent<T>>;
    type WheelEventHandler<T = Element> = EventHandler<WheelEvent<T>>;
    type AnimationEventHandler<T = Element> = EventHandler<AnimationEvent<T>>;
    type TransitionEventHandler<T = Element> = EventHandler<TransitionEvent<T>>;
    type ReactEventHandler<T = Element> = EventHandler<SyntheticEvent<T>>;

    // All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
    interface AriaAttributes {
        /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
        'aria-activedescendant'?: string;
        /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
        'aria-atomic'?: boolean | 'false' | 'true';
        /**
         * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
         * presented if they are made.
         */
        'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
        /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
        'aria-busy'?: boolean | 'false' | 'true';
        /**
         * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
         * @see aria-pressed @see aria-selected.
         */
        'aria-checked'?: boolean | 'false' | 'mixed' | 'true';
        /**
         * Defines the total number of columns in a table, grid, or treegrid.
         * @see aria-colindex.
         */
        'aria-colcount'?: number;
        /**
         * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
         * @see aria-colcount @see aria-colspan.
         */
        'aria-colindex'?: number;
        /**
         * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
         * @see aria-colindex @see aria-rowspan.
         */
        'aria-colspan'?: number;
        /**
         * Identifies the element (or elements) whose contents or presence are controlled by the current element.
         * @see aria-owns.
         */
        'aria-controls'?: string;
        /** Indicates the element that represents the current item within a container or set of related elements. */
        'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time';
        /**
         * Identifies the element (or elements) that describes the object.
         * @see aria-labelledby
         */
        'aria-describedby'?: string;
        /**
         * Identifies the element that provides a detailed, extended description for the object.
         * @see aria-describedby.
         */
        'aria-details'?: string;
        /**
         * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
         * @see aria-hidden @see aria-readonly.
         */
        'aria-disabled'?: boolean | 'false' | 'true';
        /**
         * Indicates what functions can be performed when a dragged object is released on the drop target.
         * @deprecated in ARIA 1.1
         */
        'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup';
        /**
         * Identifies the element that provides an error message for the object.
         * @see aria-invalid @see aria-describedby.
         */
        'aria-errormessage'?: string;
        /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
        'aria-expanded'?: boolean | 'false' | 'true';
        /**
         * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
         * allows assistive technology to override the general default of reading in document source order.
         */
        'aria-flowto'?: string;
        /**
         * Indicates an element's "grabbed" state in a drag-and-drop operation.
         * @deprecated in ARIA 1.1
         */
        'aria-grabbed'?: boolean | 'false' | 'true';
        /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
        'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
        /**
         * Indicates whether the element is exposed to an accessibility API.
         * @see aria-disabled.
         */
        'aria-hidden'?: boolean | 'false' | 'true';
        /**
         * Indicates the entered value does not conform to the format expected by the application.
         * @see aria-errormessage.
         */
        'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling';
        /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
        'aria-keyshortcuts'?: string;
        /**
         * Defines a string value that labels the current element.
         * @see aria-labelledby.
         */
        'aria-label'?: string;
        /**
         * Identifies the element (or elements) that labels the current element.
         * @see aria-describedby.
         */
        'aria-labelledby'?: string;
        /** Defines the hierarchical level of an element within a structure. */
        'aria-level'?: number;
        /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
        'aria-live'?: 'off' | 'assertive' | 'polite';
        /** Indicates whether an element is modal when displayed. */
        'aria-modal'?: boolean | 'false' | 'true';
        /** Indicates whether a text box accepts multiple lines of input or only a single line. */
        'aria-multiline'?: boolean | 'false' | 'true';
        /** Indicates that the user may select more than one item from the current selectable descendants. */
        'aria-multiselectable'?: boolean | 'false' | 'true';
        /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
        'aria-orientation'?: 'horizontal' | 'vertical';
        /**
         * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
         * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
         * @see aria-controls.
         */
        'aria-owns'?: string;
        /**
         * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
         * A hint could be a sample value or a brief description of the expected format.
         */
        'aria-placeholder'?: string;
        /**
         * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
         * @see aria-setsize.
         */
        'aria-posinset'?: number;
        /**
         * Indicates the current "pressed" state of toggle buttons.
         * @see aria-checked @see aria-selected.
         */
        'aria-pressed'?: boolean | 'false' | 'mixed' | 'true';
        /**
         * Indicates that the element is not editable, but is otherwise operable.
         * @see aria-disabled.
         */
        'aria-readonly'?: boolean | 'false' | 'true';
        /**
         * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
         * @see aria-atomic.
         */
        'aria-relevant'?: 'additions' | 'additions text' | 'all' | 'removals' | 'text';
        /** Indicates that user input is required on the element before a form may be submitted. */
        'aria-required'?: boolean | 'false' | 'true';
        /** Defines a human-readable, author-localized description for the role of an element. */
        'aria-roledescription'?: string;
        /**
         * Defines the total number of rows in a table, grid, or treegrid.
         * @see aria-rowindex.
         */
        'aria-rowcount'?: number;
        /**
         * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
         * @see aria-rowcount @see aria-rowspan.
         */
        'aria-rowindex'?: number;
        /**
         * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
         * @see aria-rowindex @see aria-colspan.
         */
        'aria-rowspan'?: number;
        /**
         * Indicates the current "selected" state of various widgets.
         * @see aria-checked @see aria-pressed.
         */
        'aria-selected'?: boolean | 'false' | 'true';
        /**
         * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
         * @see aria-posinset.
         */
        'aria-setsize'?: number;
        /** Indicates if items in a table or grid are sorted in ascending or descending order. */
        'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other';
        /** Defines the maximum allowed value for a range widget. */
        'aria-valuemax'?: number;
        /** Defines the minimum allowed value for a range widget. */
        'aria-valuemin'?: number;
        /**
         * Defines the current value for a range widget.
         * @see aria-valuetext.
         */
        'aria-valuenow'?: number;
        /** Defines the human readable text alternative of aria-valuenow for a range widget. */
        'aria-valuetext'?: string;
    }
    
    interface DOMAttributes<T> {
        children?: any;
        dangerouslySetInnerHTML?: {
            __html: string;
        };

        // Clipboard Events
        onCopy?: ClipboardEventHandler<T>;
        onCopyCapture?: ClipboardEventHandler<T>;
        onCut?: ClipboardEventHandler<T>;
        onCutCapture?: ClipboardEventHandler<T>;
        onPaste?: ClipboardEventHandler<T>;
        onPasteCapture?: ClipboardEventHandler<T>;

        // Composition Events
        onCompositionEnd?: CompositionEventHandler<T>;
        onCompositionEndCapture?: CompositionEventHandler<T>;
        onCompositionStart?: CompositionEventHandler<T>;
        onCompositionStartCapture?: CompositionEventHandler<T>;
        onCompositionUpdate?: CompositionEventHandler<T>;
        onCompositionUpdateCapture?: CompositionEventHandler<T>;

        // Focus Events
        onFocus?: FocusEventHandler<T>;
        onFocusCapture?: FocusEventHandler<T>;
        onBlur?: FocusEventHandler<T>;
        onBlurCapture?: FocusEventHandler<T>;

        // Form Events
        onChange?: FormEventHandler<T>;
        onChangeCapture?: FormEventHandler<T>;
        onBeforeInput?: FormEventHandler<T>;
        onBeforeInputCapture?: FormEventHandler<T>;
        onInput?: FormEventHandler<T>;
        onInputCapture?: FormEventHandler<T>;
        onReset?: FormEventHandler<T>;
        onResetCapture?: FormEventHandler<T>;
        onSubmit?: FormEventHandler<T>;
        onSubmitCapture?: FormEventHandler<T>;
        onInvalid?: FormEventHandler<T>;
        onInvalidCapture?: FormEventHandler<T>;

        // Image Events
        onLoad?: ReactEventHandler<T>;
        onLoadCapture?: ReactEventHandler<T>;
        onError?: ReactEventHandler<T>; // also a Media Event
        onErrorCapture?: ReactEventHandler<T>; // also a Media Event

        // Keyboard Events
        onKeyDown?: KeyboardEventHandler<T>;
        onKeyDownCapture?: KeyboardEventHandler<T>;
        onKeyPress?: KeyboardEventHandler<T>;
        onKeyPressCapture?: KeyboardEventHandler<T>;
        onKeyUp?: KeyboardEventHandler<T>;
        onKeyUpCapture?: KeyboardEventHandler<T>;

        // Media Events
        onAbort?: ReactEventHandler<T>;
        onAbortCapture?: ReactEventHandler<T>;
        onCanPlay?: ReactEventHandler<T>;
        onCanPlayCapture?: ReactEventHandler<T>;
        onCanPlayThrough?: ReactEventHandler<T>;
        onCanPlayThroughCapture?: ReactEventHandler<T>;
        onDurationChange?: ReactEventHandler<T>;
        onDurationChangeCapture?: ReactEventHandler<T>;
        onEmptied?: ReactEventHandler<T>;
        onEmptiedCapture?: ReactEventHandler<T>;
        onEncrypted?: ReactEventHandler<T>;
        onEncryptedCapture?: ReactEventHandler<T>;
        onEnded?: ReactEventHandler<T>;
        onEndedCapture?: ReactEventHandler<T>;
        onLoadedData?: ReactEventHandler<T>;
        onLoadedDataCapture?: ReactEventHandler<T>;
        onLoadedMetadata?: ReactEventHandler<T>;
        onLoadedMetadataCapture?: ReactEventHandler<T>;
        onLoadStart?: ReactEventHandler<T>;
        onLoadStartCapture?: ReactEventHandler<T>;
        onPause?: ReactEventHandler<T>;
        onPauseCapture?: ReactEventHandler<T>;
        onPlay?: ReactEventHandler<T>;
        onPlayCapture?: ReactEventHandler<T>;
        onPlaying?: ReactEventHandler<T>;
        onPlayingCapture?: ReactEventHandler<T>;
        onProgress?: ReactEventHandler<T>;
        onProgressCapture?: ReactEventHandler<T>;
        onRateChange?: ReactEventHandler<T>;
        onRateChangeCapture?: ReactEventHandler<T>;
        onSeeked?: ReactEventHandler<T>;
        onSeekedCapture?: ReactEventHandler<T>;
        onSeeking?: ReactEventHandler<T>;
        onSeekingCapture?: ReactEventHandler<T>;
        onStalled?: ReactEventHandler<T>;
        onStalledCapture?: ReactEventHandler<T>;
        onSuspend?: ReactEventHandler<T>;
        onSuspendCapture?: ReactEventHandler<T>;
        onTimeUpdate?: ReactEventHandler<T>;
        onTimeUpdateCapture?: ReactEventHandler<T>;
        onVolumeChange?: ReactEventHandler<T>;
        onVolumeChangeCapture?: ReactEventHandler<T>;
        onWaiting?: ReactEventHandler<T>;
        onWaitingCapture?: ReactEventHandler<T>;

        // MouseEvents
        onAuxClick?: MouseEventHandler<T>;
        onAuxClickCapture?: MouseEventHandler<T>;
        onClick?: MouseEventHandler<T>;
        onClickCapture?: MouseEventHandler<T>;
        onContextMenu?: MouseEventHandler<T>;
        onContextMenuCapture?: MouseEventHandler<T>;
        onDoubleClick?: MouseEventHandler<T>;
        onDoubleClickCapture?: MouseEventHandler<T>;
        onDrag?: DragEventHandler<T>;
        onDragCapture?: DragEventHandler<T>;
        onDragEnd?: DragEventHandler<T>;
        onDragEndCapture?: DragEventHandler<T>;
        onDragEnter?: DragEventHandler<T>;
        onDragEnterCapture?: DragEventHandler<T>;
        onDragExit?: DragEventHandler<T>;
        onDragExitCapture?: DragEventHandler<T>;
        onDragLeave?: DragEventHandler<T>;
        onDragLeaveCapture?: DragEventHandler<T>;
        onDragOver?: DragEventHandler<T>;
        onDragOverCapture?: DragEventHandler<T>;
        onDragStart?: DragEventHandler<T>;
        onDragStartCapture?: DragEventHandler<T>;
        onDrop?: DragEventHandler<T>;
        onDropCapture?: DragEventHandler<T>;
        onMouseDown?: MouseEventHandler<T>;
        onMouseDownCapture?: MouseEventHandler<T>;
        onMouseEnter?: MouseEventHandler<T>;
        onMouseLeave?: MouseEventHandler<T>;
        onMouseMove?: MouseEventHandler<T>;
        onMouseMoveCapture?: MouseEventHandler<T>;
        onMouseOut?: MouseEventHandler<T>;
        onMouseOutCapture?: MouseEventHandler<T>;
        onMouseOver?: MouseEventHandler<T>;
        onMouseOverCapture?: MouseEventHandler<T>;
        onMouseUp?: MouseEventHandler<T>;
        onMouseUpCapture?: MouseEventHandler<T>;

        // Selection Events
        onSelect?: ReactEventHandler<T>;
        onSelectCapture?: ReactEventHandler<T>;

        // Touch Events
        onTouchCancel?: TouchEventHandler<T>;
        onTouchCancelCapture?: TouchEventHandler<T>;
        onTouchEnd?: TouchEventHandler<T>;
        onTouchEndCapture?: TouchEventHandler<T>;
        onTouchMove?: TouchEventHandler<T>;
        onTouchMoveCapture?: TouchEventHandler<T>;
        onTouchStart?: TouchEventHandler<T>;
        onTouchStartCapture?: TouchEventHandler<T>;

        // Pointer Events
        onPointerDown?: PointerEventHandler<T>;
        onPointerDownCapture?: PointerEventHandler<T>;
        onPointerMove?: PointerEventHandler<T>;
        onPointerMoveCapture?: PointerEventHandler<T>;
        onPointerUp?: PointerEventHandler<T>;
        onPointerUpCapture?: PointerEventHandler<T>;
        onPointerCancel?: PointerEventHandler<T>;
        onPointerCancelCapture?: PointerEventHandler<T>;
        onPointerEnter?: PointerEventHandler<T>;
        onPointerEnterCapture?: PointerEventHandler<T>;
        onPointerLeave?: PointerEventHandler<T>;
        onPointerLeaveCapture?: PointerEventHandler<T>;
        onPointerOver?: PointerEventHandler<T>;
        onPointerOverCapture?: PointerEventHandler<T>;
        onPointerOut?: PointerEventHandler<T>;
        onPointerOutCapture?: PointerEventHandler<T>;
        onGotPointerCapture?: PointerEventHandler<T>;
        onGotPointerCaptureCapture?: PointerEventHandler<T>;
        onLostPointerCapture?: PointerEventHandler<T>;
        onLostPointerCaptureCapture?: PointerEventHandler<T>;

        // UI Events
        onScroll?: UIEventHandler<T>;
        onScrollCapture?: UIEventHandler<T>;

        // Wheel Events
        onWheel?: WheelEventHandler<T>;
        onWheelCapture?: WheelEventHandler<T>;

        // Animation Events
        onAnimationStart?: AnimationEventHandler<T>;
        onAnimationStartCapture?: AnimationEventHandler<T>;
        onAnimationEnd?: AnimationEventHandler<T>;
        onAnimationEndCapture?: AnimationEventHandler<T>;
        onAnimationIteration?: AnimationEventHandler<T>;
        onAnimationIterationCapture?: AnimationEventHandler<T>;

        // Transition Events
        onTransitionEnd?: TransitionEventHandler<T>;
        onTransitionEndCapture?: TransitionEventHandler<T>;
    }

    interface RefObject<T> {
        readonly current: T | null;
    }
    type Key = string | number;
    type Ref<T> = { bivarianceHack(instance: T | null): void }["bivarianceHack"] | RefObject<T> | null;
    type LegacyRef<T> = string | Ref<T>;

    interface Attributes {
        key?: Key;
    }
    
    interface ClassAttributes<T> extends Attributes {
        ref?: LegacyRef<T>;
    }

    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // React-specific Attributes
        defaultChecked?: boolean;
        defaultValue?: string | number | string[];
        suppressContentEditableWarning?: boolean;
        suppressHydrationWarning?: boolean;

        // Standard HTML Attributes
        accessKey?: string;
        class?: string;
        contentEditable?: Booleanish | "inherit";
        contextMenu?: string;
        dir?: string;
        draggable?: Booleanish;
        hidden?: boolean;
        id?: string;
        lang?: string;
        placeholder?: string;
        slot?: string;
        spellCheck?: Booleanish;
        style?: CSSProperties;
        tabIndex?: number;
        title?: string;
        translate?: 'yes' | 'no';

        // Unknown
        radioGroup?: string; // <command>, <menuitem>

        // WAI-ARIA
        role?: string;

        // RDFa Attributes
        about?: string;
        datatype?: string;
        inlist?: any;
        prefix?: string;
        property?: string;
        resource?: string;
        typeof?: string;
        vocab?: string;

        // Non-standard Attributes
        autoCapitalize?: string;
        autoCorrect?: string;
        autoSave?: string;
        color?: string;
        itemProp?: string;
        itemScope?: boolean;
        itemType?: string;
        itemID?: string;
        itemRef?: string;
        results?: number;
        security?: string;
        unselectable?: 'on' | 'off';

        // Living Standard
        /**
         * Hints at the type of data that might be entered by the user while editing the element or its contents
         * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
         */
        inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
        /**
         * Specify that a standard HTML element should behave like a defined custom built-in element
         * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
         */
        is?: string;
    }

    type DetailedHTMLProps<E extends HTMLAttributes<T>, T> = ClassAttributes<T> & E;

    
    interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
        download?: any;
        href?: string;
        hrefLang?: string;
        media?: string;
        ping?: string;
        rel?: string;
        target?: string;
        type?: string;
        referrerPolicy?: string;
    }
    
    interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
        alt?: string;
        coords?: string;
        download?: any;
        href?: string;
        hrefLang?: string;
        media?: string;
        rel?: string;
        shape?: string;
        target?: string;
    }

    interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
        href?: string;
        target?: string;
    }

    interface BlockquoteHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string;
    }

    interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
        autoFocus?: boolean;
        disabled?: boolean;
        form?: string;
        formAction?: string;
        formEncType?: string;
        formMethod?: string;
        formNoValidate?: boolean;
        formTarget?: string;
        name?: string;
        type?: 'submit' | 'reset' | 'button';
        value?: string | string[] | number;
    }

    interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string;
        width?: number | string;
    }

    interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
        span?: number;
        width?: number | string;
    }

    interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
        span?: number;
    }

    interface DataHTMLAttributes<T> extends HTMLAttributes<T> {
        value?: string | string[] | number;
    }

    interface DetailsHTMLAttributes<T> extends HTMLAttributes<T> {
        open?: boolean;
    }

    interface DelHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string;
        dateTime?: string;
    }

    interface DialogHTMLAttributes<T> extends HTMLAttributes<T> {
        open?: boolean;
    }

    interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string;
        src?: string;
        type?: string;
        width?: number | string;
    }

    interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean;
        form?: string;
        name?: string;
    }

    interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
        acceptCharset?: string;
        action?: string;
        autoComplete?: string;
        encType?: string;
        method?: string;
        name?: string;
        noValidate?: boolean;
        target?: string;
    }

    interface HtmlHTMLAttributes<T> extends HTMLAttributes<T> {
        manifest?: string;
    }

    interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
        allow?: string;
        allowFullScreen?: boolean;
        allowTransparency?: boolean;
        frameBorder?: number | string;
        height?: number | string;
        marginHeight?: number;
        marginWidth?: number;
        name?: string;
        referrerPolicy?: string;
        sandbox?: string;
        scrolling?: string;
        seamless?: boolean;
        src?: string;
        srcDoc?: string;
        width?: number | string;
    }

    interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
        alt?: string;
        crossOrigin?: "anonymous" | "use-credentials" | "";
        decoding?: "async" | "auto" | "sync";
        height?: number | string;
        loading?: "eager" | "lazy";
        sizes?: string;
        src?: string;
        srcSet?: string;
        useMap?: string;
        width?: number | string;
    }

    interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string;
        dateTime?: string;
    }

    interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
        accept?: string;
        alt?: string;
        autoComplete?: string;
        autoFocus?: boolean;
        capture?: boolean | string; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
        checked?: boolean;
        crossOrigin?: string;
        disabled?: boolean;
        form?: string;
        formAction?: string;
        formEncType?: string;
        formMethod?: string;
        formNoValidate?: boolean;
        formTarget?: string;
        height?: number | string;
        list?: string;
        max?: number | string;
        maxLength?: number;
        min?: number | string;
        minLength?: number;
        multiple?: boolean;
        name?: string;
        pattern?: string;
        placeholder?: string;
        readOnly?: boolean;
        required?: boolean;
        size?: number;
        src?: string;
        step?: number | string;
        type?: string;
        value?: string | string[] | number;
        width?: number | string;

        onChange?: ChangeEventHandler<T>;
    }

    interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
        autoFocus?: boolean;
        challenge?: string;
        disabled?: boolean;
        form?: string;
        keyType?: string;
        keyParams?: string;
        name?: string;
    }

    interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}
    
    interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
        autoPlay?: boolean;
        controls?: boolean;
        controlsList?: string;
        crossOrigin?: string;
        loop?: boolean;
        mediaGroup?: string;
        muted?: boolean;
        playsinline?: boolean;
        preload?: string;
        src?: string;
    }

    interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string;
        htmlFor?: string;
    }

    interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
        value?: string | string[] | number;
    }

    interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
        as?: string;
        crossOrigin?: string;
        href?: string;
        hrefLang?: string;
        integrity?: string;
        media?: string;
        rel?: string;
        sizes?: string;
        type?: string;
    }

    interface MapHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string;
    }

    interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
        type?: string;
    }

    interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
        autoPlay?: boolean;
        controls?: boolean;
        controlsList?: string;
        crossOrigin?: string;
        loop?: boolean;
        mediaGroup?: string;
        muted?: boolean;
        playsinline?: boolean;
        preload?: string;
        src?: string;
    }

    interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
        charSet?: string;
        content?: string;
        httpEquiv?: string;
        name?: string;
    }

    interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string;
        high?: number;
        low?: number;
        max?: number | string;
        min?: number | string;
        optimum?: number;
        value?: string | string[] | number;
    }

    interface QuoteHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string;
    }

    interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
        classID?: string;
        data?: string;
        form?: string;
        height?: number | string;
        name?: string;
        type?: string;
        useMap?: string;
        width?: number | string;
        wmode?: string;
    }

    interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
        reversed?: boolean;
        start?: number;
        type?: '1' | 'a' | 'A' | 'i' | 'I';
    }

    interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean;
        label?: string;
    }

    interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean;
        label?: string;
        selected?: boolean;
        value?: string | string[] | number;
    }

    interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string;
        htmlFor?: string;
        name?: string;
    }

    interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string;
        value?: string | string[] | number;
    }

    interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
        max?: number | string;
        value?: string | string[] | number;
    }

    interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
        async?: boolean;
        charSet?: string;
        crossOrigin?: string;
        defer?: boolean;
        integrity?: string;
        noModule?: boolean;
        nonce?: string;
        src?: string;
        type?: string;
    }

    interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
        autoComplete?: string;
        autoFocus?: boolean;
        disabled?: boolean;
        form?: string;
        multiple?: boolean;
        name?: string;
        required?: boolean;
        size?: number;
        value?: string | string[] | number;
        onChange?: ChangeEventHandler<T>;
    }

    interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
        media?: string;
        sizes?: string;
        src?: string;
        srcSet?: string;
        type?: string;
    }

    interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
        media?: string;
        nonce?: string;
        scoped?: boolean;
        type?: string;
    }

    interface TableHTMLAttributes<T> extends HTMLAttributes<T> {
        cellPadding?: number | string;
        cellSpacing?: number | string;
        summary?: string;
    }

    interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
        autoComplete?: string;
        autoFocus?: boolean;
        cols?: number;
        dirName?: string;
        disabled?: boolean;
        form?: string;
        maxLength?: number;
        minLength?: number;
        name?: string;
        placeholder?: string;
        readOnly?: boolean;
        required?: boolean;
        rows?: number;
        value?: string | string[] | number;
        wrap?: string;

        onChange?: ChangeEventHandler<T>;
    }

    interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
        align?: "left" | "center" | "right" | "justify" | "char";
        colSpan?: number;
        headers?: string;
        rowSpan?: number;
        scope?: string;
        abbr?: string;
        valign?: "top" | "middle" | "bottom" | "baseline";
    }

    interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
        align?: "left" | "center" | "right" | "justify" | "char";
        colSpan?: number;
        headers?: string;
        rowSpan?: number;
        scope?: string;
        abbr?: string;
    }

    interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
        dateTime?: string;
    }

    interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
        default?: boolean;
        kind?: string;
        label?: string;
        src?: string;
        srcLang?: string;
    }

    interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
        height?: number | string;
        playsInline?: boolean;
        poster?: string;
        width?: number | string;
        disablePictureInPicture?: boolean;
    }

    interface WebViewHTMLAttributes<T> extends HTMLAttributes<T> {
        allowFullScreen?: boolean;
        allowpopups?: boolean;
        autoFocus?: boolean;
        autosize?: boolean;
        blinkfeatures?: string;
        disableblinkfeatures?: string;
        disableguestresize?: boolean;
        disablewebsecurity?: boolean;
        guestinstance?: string;
        httpreferrer?: string;
        nodeintegration?: boolean;
        partition?: string;
        plugins?: boolean;
        preload?: string;
        src?: string;
        useragent?: string;
        webpreferences?: string;
    }

    
    // this list is "complete" in that it contains every SVG attribute
    // that React supports, but the types can be improved.
    // Full list here: https://facebook.github.io/react/docs/dom-elements.html
    //
    // The three broad type categories are (in order of restrictiveness):
    //   - "number | string"
    //   - "string"
    //   - union of string literals
    interface SVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // Attributes which also defined in HTMLAttributes
        // See comment in SVGDOMPropertyConfig.js
        className?: string;
        color?: string;
        height?: number | string;
        id?: string;
        lang?: string;
        max?: number | string;
        media?: string;
        method?: string;
        min?: number | string;
        name?: string;
        style?: CSSProperties;
        target?: string;
        type?: string;
        width?: number | string;

        // Other HTML properties supported by SVG elements in browsers
        role?: string;
        tabIndex?: number;
        crossOrigin?: "anonymous" | "use-credentials" | "";

        // SVG Specific attributes
        accentHeight?: number | string;
        accumulate?: "none" | "sum";
        additive?: "replace" | "sum";
        alignmentBaseline?: "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" |
        "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "inherit";
        allowReorder?: "no" | "yes";
        alphabetic?: number | string;
        amplitude?: number | string;
        arabicForm?: "initial" | "medial" | "terminal" | "isolated";
        ascent?: number | string;
        attributeName?: string;
        attributeType?: string;
        autoReverse?: Booleanish;
        azimuth?: number | string;
        baseFrequency?: number | string;
        baselineShift?: number | string;
        baseProfile?: number | string;
        bbox?: number | string;
        begin?: number | string;
        bias?: number | string;
        by?: number | string;
        calcMode?: number | string;
        capHeight?: number | string;
        clip?: number | string;
        clipPath?: string;
        clipPathUnits?: number | string;
        clipRule?: number | string;
        colorInterpolation?: number | string;
        colorInterpolationFilters?: "auto" | "sRGB" | "linearRGB" | "inherit";
        colorProfile?: number | string;
        colorRendering?: number | string;
        contentScriptType?: number | string;
        contentStyleType?: number | string;
        cursor?: number | string;
        cx?: number | string;
        cy?: number | string;
        d?: string;
        decelerate?: number | string;
        descent?: number | string;
        diffuseConstant?: number | string;
        direction?: number | string;
        display?: number | string;
        divisor?: number | string;
        dominantBaseline?: number | string;
        dur?: number | string;
        dx?: number | string;
        dy?: number | string;
        edgeMode?: number | string;
        elevation?: number | string;
        enableBackground?: number | string;
        end?: number | string;
        exponent?: number | string;
        externalResourcesRequired?: Booleanish;
        fill?: string;
        fillOpacity?: number | string;
        fillRule?: "nonzero" | "evenodd" | "inherit";
        filter?: string;
        filterRes?: number | string;
        filterUnits?: number | string;
        floodColor?: number | string;
        floodOpacity?: number | string;
        focusable?: Booleanish | "auto";
        fontFamily?: string;
        fontSize?: number | string;
        fontSizeAdjust?: number | string;
        fontStretch?: number | string;
        fontStyle?: number | string;
        fontVariant?: number | string;
        fontWeight?: number | string;
        format?: number | string;
        from?: number | string;
        fx?: number | string;
        fy?: number | string;
        g1?: number | string;
        g2?: number | string;
        glyphName?: number | string;
        glyphOrientationHorizontal?: number | string;
        glyphOrientationVertical?: number | string;
        glyphRef?: number | string;
        gradientTransform?: string;
        gradientUnits?: string;
        hanging?: number | string;
        horizAdvX?: number | string;
        horizOriginX?: number | string;
        href?: string;
        ideographic?: number | string;
        imageRendering?: number | string;
        in2?: number | string;
        in?: string;
        intercept?: number | string;
        k1?: number | string;
        k2?: number | string;
        k3?: number | string;
        k4?: number | string;
        k?: number | string;
        kernelMatrix?: number | string;
        kernelUnitLength?: number | string;
        kerning?: number | string;
        keyPoints?: number | string;
        keySplines?: number | string;
        keyTimes?: number | string;
        lengthAdjust?: number | string;
        letterSpacing?: number | string;
        lightingColor?: number | string;
        limitingConeAngle?: number | string;
        local?: number | string;
        markerEnd?: string;
        markerHeight?: number | string;
        markerMid?: string;
        markerStart?: string;
        markerUnits?: number | string;
        markerWidth?: number | string;
        mask?: string;
        maskContentUnits?: number | string;
        maskUnits?: number | string;
        mathematical?: number | string;
        mode?: number | string;
        numOctaves?: number | string;
        offset?: number | string;
        opacity?: number | string;
        operator?: number | string;
        order?: number | string;
        orient?: number | string;
        orientation?: number | string;
        origin?: number | string;
        overflow?: number | string;
        overlinePosition?: number | string;
        overlineThickness?: number | string;
        paintOrder?: number | string;
        panose1?: number | string;
        path?: string;
        pathLength?: number | string;
        patternContentUnits?: string;
        patternTransform?: number | string;
        patternUnits?: string;
        pointerEvents?: number | string;
        points?: string;
        pointsAtX?: number | string;
        pointsAtY?: number | string;
        pointsAtZ?: number | string;
        preserveAlpha?: Booleanish;
        preserveAspectRatio?: string;
        primitiveUnits?: number | string;
        r?: number | string;
        radius?: number | string;
        refX?: number | string;
        refY?: number | string;
        renderingIntent?: number | string;
        repeatCount?: number | string;
        repeatDur?: number | string;
        requiredExtensions?: number | string;
        requiredFeatures?: number | string;
        restart?: number | string;
        result?: string;
        rotate?: number | string;
        rx?: number | string;
        ry?: number | string;
        scale?: number | string;
        seed?: number | string;
        shapeRendering?: number | string;
        slope?: number | string;
        spacing?: number | string;
        specularConstant?: number | string;
        specularExponent?: number | string;
        speed?: number | string;
        spreadMethod?: string;
        startOffset?: number | string;
        stdDeviation?: number | string;
        stemh?: number | string;
        stemv?: number | string;
        stitchTiles?: number | string;
        stopColor?: string;
        stopOpacity?: number | string;
        strikethroughPosition?: number | string;
        strikethroughThickness?: number | string;
        string?: number | string;
        stroke?: string;
        strokeDasharray?: string | number;
        strokeDashoffset?: string | number;
        strokeLinecap?: "butt" | "round" | "square" | "inherit";
        strokeLinejoin?: "miter" | "round" | "bevel" | "inherit";
        strokeMiterlimit?: number | string;
        strokeOpacity?: number | string;
        strokeWidth?: number | string;
        surfaceScale?: number | string;
        systemLanguage?: number | string;
        tableValues?: number | string;
        targetX?: number | string;
        targetY?: number | string;
        textAnchor?: string;
        textDecoration?: number | string;
        textLength?: number | string;
        textRendering?: number | string;
        to?: number | string;
        transform?: string;
        u1?: number | string;
        u2?: number | string;
        underlinePosition?: number | string;
        underlineThickness?: number | string;
        unicode?: number | string;
        unicodeBidi?: number | string;
        unicodeRange?: number | string;
        unitsPerEm?: number | string;
        vAlphabetic?: number | string;
        values?: string;
        vectorEffect?: number | string;
        version?: string;
        vertAdvY?: number | string;
        vertOriginX?: number | string;
        vertOriginY?: number | string;
        vHanging?: number | string;
        vIdeographic?: number | string;
        viewBox?: string;
        viewTarget?: number | string;
        visibility?: number | string;
        vMathematical?: number | string;
        widths?: number | string;
        wordSpacing?: number | string;
        writingMode?: number | string;
        x1?: number | string;
        x2?: number | string;
        x?: number | string;
        xChannelSelector?: string;
        xHeight?: number | string;
        xlinkActuate?: string;
        xlinkArcrole?: string;
        xlinkHref?: string;
        xlinkRole?: string;
        xlinkShow?: string;
        xlinkTitle?: string;
        xlinkType?: string;
        xmlBase?: string;
        xmlLang?: string;
        xmlns?: string;
        xmlnsXlink?: string;
        xmlSpace?: string;
        y1?: number | string;
        y2?: number | string;
        y?: number | string;
        yChannelSelector?: string;
        z?: number | string;
        zoomAndPan?: string;
    }


    interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {
    }


}

declare global {
    namespace JSX {
        // tslint:disable-next-line:no-empty-interface
        interface Element extends VNode { }
        interface ElementClass extends Vue {
            // render(): VNode;
        }
        // interface ElementAttributesProperty { props: {}; }
        interface ElementChildrenAttribute { children: {}; }

      

        // tslint:disable-next-line:no-empty-interface
        interface IntrinsicAttributes extends TsxVue.Attributes { }
        // tslint:disable-next-line:no-empty-interface
        interface IntrinsicClassAttributes<T> extends TsxVue.ClassAttributes<T> { }

        interface IntrinsicElements {
            // HTML
            a: TsxVue.DetailedHTMLProps<TsxVue.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
            abbr: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            address: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            area: TsxVue.DetailedHTMLProps<TsxVue.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
            article: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            aside: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            audio: TsxVue.DetailedHTMLProps<TsxVue.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
            b: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            base: TsxVue.DetailedHTMLProps<TsxVue.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
            bdi: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            bdo: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            big: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            blockquote: TsxVue.DetailedHTMLProps<TsxVue.BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>;
            body: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
            br: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
            button: TsxVue.DetailedHTMLProps<TsxVue.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
            canvas: TsxVue.DetailedHTMLProps<TsxVue.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
            caption: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            cite: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            code: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            col: TsxVue.DetailedHTMLProps<TsxVue.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            colgroup: TsxVue.DetailedHTMLProps<TsxVue.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            data: TsxVue.DetailedHTMLProps<TsxVue.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
            datalist: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
            dd: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            del: TsxVue.DetailedHTMLProps<TsxVue.DelHTMLAttributes<HTMLElement>, HTMLElement>;
            details: TsxVue.DetailedHTMLProps<TsxVue.DetailsHTMLAttributes<HTMLElement>, HTMLElement>;
            dfn: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            dialog: TsxVue.DetailedHTMLProps<TsxVue.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
            div: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
            dl: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
            dt: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            em: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            embed: TsxVue.DetailedHTMLProps<TsxVue.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
            fieldset: TsxVue.DetailedHTMLProps<TsxVue.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
            figcaption: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            figure: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            footer: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            form: TsxVue.DetailedHTMLProps<TsxVue.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
            h1: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h2: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h3: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h4: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h5: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h6: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            head: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
            header: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            hgroup: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            hr: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
            html: TsxVue.DetailedHTMLProps<TsxVue.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
            i: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            iframe: TsxVue.DetailedHTMLProps<TsxVue.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
            img: TsxVue.DetailedHTMLProps<TsxVue.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
            input: TsxVue.DetailedHTMLProps<TsxVue.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
            ins: TsxVue.DetailedHTMLProps<TsxVue.InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
            kbd: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            keygen: TsxVue.DetailedHTMLProps<TsxVue.KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
            label: TsxVue.DetailedHTMLProps<TsxVue.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
            legend: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
            li: TsxVue.DetailedHTMLProps<TsxVue.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
            link: TsxVue.DetailedHTMLProps<TsxVue.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
            main: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            map: TsxVue.DetailedHTMLProps<TsxVue.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
            mark: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            menu: TsxVue.DetailedHTMLProps<TsxVue.MenuHTMLAttributes<HTMLElement>, HTMLElement>;
            menuitem: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            meta: TsxVue.DetailedHTMLProps<TsxVue.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
            meter: TsxVue.DetailedHTMLProps<TsxVue.MeterHTMLAttributes<HTMLElement>, HTMLElement>;
            nav: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            noindex: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            noscript: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            object: TsxVue.DetailedHTMLProps<TsxVue.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
            ol: TsxVue.DetailedHTMLProps<TsxVue.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
            optgroup: TsxVue.DetailedHTMLProps<TsxVue.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
            option: TsxVue.DetailedHTMLProps<TsxVue.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
            output: TsxVue.DetailedHTMLProps<TsxVue.OutputHTMLAttributes<HTMLElement>, HTMLElement>;
            p: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
            param: TsxVue.DetailedHTMLProps<TsxVue.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
            picture: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            pre: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
            progress: TsxVue.DetailedHTMLProps<TsxVue.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
            q: TsxVue.DetailedHTMLProps<TsxVue.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
            rp: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            rt: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            ruby: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            s: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            samp: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            script: TsxVue.DetailedHTMLProps<TsxVue.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
            section: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            select: TsxVue.DetailedHTMLProps<TsxVue.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
            small: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            source: TsxVue.DetailedHTMLProps<TsxVue.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
            span: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
            strong: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            style: TsxVue.DetailedHTMLProps<TsxVue.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
            sub: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            summary: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            sup: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            table: TsxVue.DetailedHTMLProps<TsxVue.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
            template: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;
            tbody: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            td: TsxVue.DetailedHTMLProps<TsxVue.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
            textarea: TsxVue.DetailedHTMLProps<TsxVue.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
            tfoot: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            th: TsxVue.DetailedHTMLProps<TsxVue.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
            thead: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            time: TsxVue.DetailedHTMLProps<TsxVue.TimeHTMLAttributes<HTMLElement>, HTMLElement>;
            title: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
            tr: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
            track: TsxVue.DetailedHTMLProps<TsxVue.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
            u: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            ul: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
            "var": TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            video: TsxVue.DetailedHTMLProps<TsxVue.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
            wbr: TsxVue.DetailedHTMLProps<TsxVue.HTMLAttributes<HTMLElement>, HTMLElement>;
            webview: TsxVue.DetailedHTMLProps<TsxVue.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;

            // SVG
            svg: TsxVue.SVGProps<SVGSVGElement>;

            animate: TsxVue.SVGProps<SVGElement>; // TODO: It is SVGAnimateElement but is not in TypeScript's lib.dom.d.ts for now.
            animateMotion: TsxVue.SVGProps<SVGElement>;
            animateTransform: TsxVue.SVGProps<SVGElement>; // TODO: It is SVGAnimateTransformElement but is not in TypeScript's lib.dom.d.ts for now.
            circle: TsxVue.SVGProps<SVGCircleElement>;
            clipPath: TsxVue.SVGProps<SVGClipPathElement>;
            defs: TsxVue.SVGProps<SVGDefsElement>;
            desc: TsxVue.SVGProps<SVGDescElement>;
            ellipse: TsxVue.SVGProps<SVGEllipseElement>;
            feBlend: TsxVue.SVGProps<SVGFEBlendElement>;
            feColorMatrix: TsxVue.SVGProps<SVGFEColorMatrixElement>;
            feComponentTransfer: TsxVue.SVGProps<SVGFEComponentTransferElement>;
            feComposite: TsxVue.SVGProps<SVGFECompositeElement>;
            feConvolveMatrix: TsxVue.SVGProps<SVGFEConvolveMatrixElement>;
            feDiffuseLighting: TsxVue.SVGProps<SVGFEDiffuseLightingElement>;
            feDisplacementMap: TsxVue.SVGProps<SVGFEDisplacementMapElement>;
            feDistantLight: TsxVue.SVGProps<SVGFEDistantLightElement>;
            feDropShadow: TsxVue.SVGProps<SVGFEDropShadowElement>;
            feFlood: TsxVue.SVGProps<SVGFEFloodElement>;
            feFuncA: TsxVue.SVGProps<SVGFEFuncAElement>;
            feFuncB: TsxVue.SVGProps<SVGFEFuncBElement>;
            feFuncG: TsxVue.SVGProps<SVGFEFuncGElement>;
            feFuncR: TsxVue.SVGProps<SVGFEFuncRElement>;
            feGaussianBlur: TsxVue.SVGProps<SVGFEGaussianBlurElement>;
            feImage: TsxVue.SVGProps<SVGFEImageElement>;
            feMerge: TsxVue.SVGProps<SVGFEMergeElement>;
            feMergeNode: TsxVue.SVGProps<SVGFEMergeNodeElement>;
            feMorphology: TsxVue.SVGProps<SVGFEMorphologyElement>;
            feOffset: TsxVue.SVGProps<SVGFEOffsetElement>;
            fePointLight: TsxVue.SVGProps<SVGFEPointLightElement>;
            feSpecularLighting: TsxVue.SVGProps<SVGFESpecularLightingElement>;
            feSpotLight: TsxVue.SVGProps<SVGFESpotLightElement>;
            feTile: TsxVue.SVGProps<SVGFETileElement>;
            feTurbulence: TsxVue.SVGProps<SVGFETurbulenceElement>;
            filter: TsxVue.SVGProps<SVGFilterElement>;
            foreignObject: TsxVue.SVGProps<SVGForeignObjectElement>;
            g: TsxVue.SVGProps<SVGGElement>;
            image: TsxVue.SVGProps<SVGImageElement>;
            line: TsxVue.SVGProps<SVGLineElement>;
            linearGradient: TsxVue.SVGProps<SVGLinearGradientElement>;
            marker: TsxVue.SVGProps<SVGMarkerElement>;
            mask: TsxVue.SVGProps<SVGMaskElement>;
            metadata: TsxVue.SVGProps<SVGMetadataElement>;
            mpath: TsxVue.SVGProps<SVGElement>;
            path: TsxVue.SVGProps<SVGPathElement>;
            pattern: TsxVue.SVGProps<SVGPatternElement>;
            polygon: TsxVue.SVGProps<SVGPolygonElement>;
            polyline: TsxVue.SVGProps<SVGPolylineElement>;
            radialGradient: TsxVue.SVGProps<SVGRadialGradientElement>;
            rect: TsxVue.SVGProps<SVGRectElement>;
            stop: TsxVue.SVGProps<SVGStopElement>;
            switch: TsxVue.SVGProps<SVGSwitchElement>;
            symbol: TsxVue.SVGProps<SVGSymbolElement>;
            text: TsxVue.SVGProps<SVGTextElement>;
            textPath: TsxVue.SVGProps<SVGTextPathElement>;
            tspan: TsxVue.SVGProps<SVGTSpanElement>;
            use: TsxVue.SVGProps<SVGUseElement>;
            view: TsxVue.SVGProps<SVGViewElement>;
            [ key: string ]: any;
        }
    }
}
