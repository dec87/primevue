import { Plugin } from 'vue';
import { AccordionPassThroughOptions } from '../accordion';
import { AccordionContentPassThroughOptions } from '../accordioncontent';
import { AccordionHeaderPassThroughOptions } from '../accordionheader';
import { AccordionPanelPassThroughOptions } from '../accordionpanel';
import { AccordionTabPassThroughOptions } from '../accordiontab';
import { AnimateOnScrollDirectivePassThroughOptions } from '../animateonscroll';
import { AutoCompletePassThroughOptions } from '../autocomplete';
import { AvatarPassThroughOptions } from '../avatar';
import { AvatarGroupPassThroughOptions } from '../avatargroup';
import { BadgePassThroughOptions } from '../badge';
import { BadgeDirectivePassThroughOptions } from '../badgedirective';
import { BlockUIPassThroughOptions } from '../blockui';
import { BreadcrumbPassThroughOptions } from '../breadcrumb';
import { ButtonPassThroughOptions } from '../button';
import { CalendarPassThroughOptions } from '../calendar';
import { CardPassThroughOptions } from '../card';
import { CarouselPassThroughOptions } from '../carousel';
import { CascadeSelectPassThroughOptions } from '../cascadeselect';
import { ChartPassThroughOptions } from '../chart';
import { CheckboxPassThroughOptions } from '../checkbox';
import { ChipPassThroughOptions } from '../chip';
import { ChipsPassThroughOptions } from '../chips';
import { ColorPickerPassThroughOptions } from '../colorpicker';
import { ColumnPassThroughOptions } from '../column';
import { ColumnGroupPassThroughOptions } from '../columngroup';
import { ConfirmDialogPassThroughOptions } from '../confirmdialog';
import { ConfirmPopupPassThroughOptions } from '../confirmpopup';
import { ContextMenuPassThroughOptions } from '../contextmenu';
import { DataTablePassThroughOptions } from '../datatable';
import { DataViewPassThroughOptions } from '../dataview';
import { DatePickerPassThroughOptions } from '../datepicker';
import { DeferredContentPassThroughOptions } from '../deferredcontent';
import { DialogPassThroughOptions } from '../dialog';
import { DividerPassThroughOptions } from '../divider';
import { DockPassThroughOptions } from '../dock';
import { DrawerPassThroughOptions } from '../drawer';
import { DropdownPassThroughOptions } from '../dropdown';
import { EditorPassThroughOptions } from '../editor';
import { FieldsetPassThroughOptions } from '../fieldset';
import { FileUploadPassThroughOptions } from '../fileupload';
import { FocusTrapDirectivePassThroughOptions } from '../focustrap';
import { GalleriaPassThroughOptions } from '../galleria';
import { ImagePassThroughOptions } from '../image';
import { InlineMessagePassThroughOptions } from '../inlinemessage';
import { InplacePassThroughOptions } from '../inplace';
import { InputChipsPassThroughOptions } from '../inputchips';
import { InputMaskPassThroughOptions } from '../inputmask';
import { InputNumberPassThroughOptions } from '../inputnumber';
import { InputSwitchPassThroughOptions } from '../inputswitch';
import { InputTextPassThroughOptions } from '../inputtext';
import { KnobPassThroughOptions } from '../knob';
import { ListboxPassThroughOptions } from '../listbox';
import { MegaMenuPassThroughOptions } from '../megamenu';
import { MenuPassThroughOptions } from '../menu';
import { MenubarPassThroughOptions } from '../menubar';
import { MessagePassThroughOptions } from '../message';
import { MultiSelectPassThroughOptions } from '../multiselect';
import { OrderListPassThroughOptions } from '../orderlist';
import { OrganizationChartPassThroughOptions } from '../organizationchart';
import { OverlayPanelPassThroughOptions } from '../overlaypanel';
import { PaginatorPassThroughOptions } from '../paginator';
import { PanelPassThroughOptions } from '../panel';
import { PanelMenuPassThroughOptions } from '../panelmenu';
import { PassThroughOptions } from '../passthrough';
import { PasswordPassThroughOptions } from '../password';
import { PickListPassThroughOptions } from '../picklist';
import { PopoverPassThroughOptions } from '../popover';
import { ProgressBarPassThroughOptions } from '../progressbar';
import { ProgressSpinnerPassThroughOptions } from '../progressspinner';
import { RadioButtonPassThroughOptions } from '../radiobutton';
import { RatingPassThroughOptions } from '../rating';
import { RippleDirectivePassThroughOptions } from '../ripple';
import { RowPassThroughOptions } from '../row';
import { ScrollPanelPassThroughOptions } from '../scrollpanel';
import { ScrollTopPassThroughOptions } from '../scrolltop';
import { SelectPassThroughOptions } from '../select';
import { SelectButtonPassThroughOptions } from '../selectbutton';
import { SidebarPassThroughOptions } from '../sidebar';
import { SkeletonPassThroughOptions } from '../skeleton';
import { SliderPassThroughOptions } from '../slider';
import { SpeedDialPassThroughOptions } from '../speeddial';
import { SplitButtonPassThroughOptions } from '../splitbutton';
import { SplitterPassThroughOptions } from '../splitter';
import { SplitterPanelPassThroughOptions } from '../splitterpanel';
import { StepsPassThroughOptions } from '../steps';
import { StyleClassDirectivePassThroughOptions } from '../styleclass';
import { TabPassThroughOptions } from '../tab';
import { TabListPassThroughOptions } from '../tablist';
import { TabMenuPassThroughOptions } from '../tabmenu';
import { TabPanelPassThroughOptions } from '../tabpanel';
import { TabPanelsPassThroughOptions } from '../tabpanels';
import { TabsPassThroughOptions } from '../tabs';
import { TabViewPassThroughOptions } from '../tabview';
import { TagPassThroughOptions } from '../tag';
import { TerminalPassThroughOptions } from '../terminal';
import { TextareaPassThroughOptions } from '../textarea';
import { TieredMenuPassThroughOptions } from '../tieredmenu';
import { TimelinePassThroughOptions } from '../timeline';
import { ToastPassThroughOptions } from '../toast';
import { ToggleButtonPassThroughOptions } from '../togglebutton';
import { ToggleSwitchPassThroughOptions } from '../toggleswitch';
import { ToolbarPassThroughOptions } from '../toolbar';
import { TooltipDirectivePassThroughOptions } from '../tooltip';
import { TreePassThroughOptions } from '../tree';
import { TreeSelectPassThroughOptions } from '../treeselect';
import { TreeTablePassThroughOptions } from '../treetable';
import { DefaultPassThrough, PassThrough } from '../ts-helpers';
import { VirtualScrollerPassThroughOptions } from '../virtualscroller';

export interface PrimeVueConfiguration {
    ripple?: boolean;
    inputStyle?: 'filled' | 'outlined' | undefined;
    locale?: PrimeVueLocaleOptions;
    filterMatchModeOptions?: any;
    zIndex?: PrimeVueZIndexOptions;
    theme?: any;
    unstyled?: boolean;
    pt?: PassThrough<PrimeVuePTOptions>;
    ptOptions?: PassThroughOptions;
    csp?: PrimeVueCSPOptions;
}

export declare const defaultOptions: PrimeVueConfiguration;

export interface PrimeVueZIndexOptions {
    modal?: number;
    overlay?: number;
    menu?: number;
    tooltip?: number;
}

export interface PrimeVueCSPOptions {
    nonce?: string;
}

export interface PrimeVuePTOptions {
    accordion?: DefaultPassThrough<AccordionPassThroughOptions>;
    accordionpanel?: DefaultPassThrough<AccordionPanelPassThroughOptions>;
    accordionheader?: DefaultPassThrough<AccordionHeaderPassThroughOptions>;
    accordioncontent?: DefaultPassThrough<AccordionContentPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Accordion instead.
     */
    accordiontab?: DefaultPassThrough<AccordionTabPassThroughOptions>;
    autocomplete?: DefaultPassThrough<AutoCompletePassThroughOptions>;
    avatar?: DefaultPassThrough<AvatarPassThroughOptions>;
    avatargroup?: DefaultPassThrough<AvatarGroupPassThroughOptions>;
    badge?: DefaultPassThrough<BadgePassThroughOptions>;
    blockui?: DefaultPassThrough<BlockUIPassThroughOptions>;
    breadcrumb?: DefaultPassThrough<BreadcrumbPassThroughOptions>;
    button?: DefaultPassThrough<ButtonPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of DatePicker instead.
     */
    calendar?: DefaultPassThrough<CalendarPassThroughOptions>;
    card?: DefaultPassThrough<CardPassThroughOptions>;
    carousel?: DefaultPassThrough<CarouselPassThroughOptions>;
    cascadeselect?: DefaultPassThrough<CascadeSelectPassThroughOptions>;
    chart?: DefaultPassThrough<ChartPassThroughOptions>;
    checkbox?: DefaultPassThrough<CheckboxPassThroughOptions>;
    chip?: DefaultPassThrough<ChipPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of InputChips instead.
     */
    chips?: DefaultPassThrough<ChipsPassThroughOptions>;
    colorpicker?: DefaultPassThrough<ColorPickerPassThroughOptions>;
    column?: DefaultPassThrough<ColumnPassThroughOptions>;
    columngroup?: DefaultPassThrough<ColumnGroupPassThroughOptions>;
    confirmdialog?: DefaultPassThrough<ConfirmDialogPassThroughOptions>;
    confirmpopup?: DefaultPassThrough<ConfirmPopupPassThroughOptions>;
    contextmenu?: DefaultPassThrough<ContextMenuPassThroughOptions>;
    datatable?: DefaultPassThrough<DataTablePassThroughOptions>;
    dataview?: DefaultPassThrough<DataViewPassThroughOptions>;
    datepicker?: DefaultPassThrough<DatePickerPassThroughOptions>;
    deferredcontent?: DefaultPassThrough<DeferredContentPassThroughOptions>;
    divider?: DefaultPassThrough<DividerPassThroughOptions>;
    dialog?: DefaultPassThrough<DialogPassThroughOptions>;
    dock?: DefaultPassThrough<DockPassThroughOptions>;
    drawer?: DefaultPassThrough<DrawerPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Select instead.
     */
    dropdown?: DefaultPassThrough<DropdownPassThroughOptions>;
    dynamicdialog?: DefaultPassThrough<DialogPassThroughOptions>;
    editor?: DefaultPassThrough<EditorPassThroughOptions>;
    fieldset?: DefaultPassThrough<FieldsetPassThroughOptions>;
    fileupload?: DefaultPassThrough<FileUploadPassThroughOptions>;
    galleria?: DefaultPassThrough<GalleriaPassThroughOptions>;
    image?: DefaultPassThrough<ImagePassThroughOptions>;
    inlinemessage?: DefaultPassThrough<InlineMessagePassThroughOptions>;
    inplace?: DefaultPassThrough<InplacePassThroughOptions>;
    inputchips?: DefaultPassThrough<InputChipsPassThroughOptions>;
    inputmask?: DefaultPassThrough<InputMaskPassThroughOptions>;
    inputnumber?: DefaultPassThrough<InputNumberPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of ToggleSwitch instead.
     */
    inputswitch?: DefaultPassThrough<InputSwitchPassThroughOptions>;
    inputtext?: DefaultPassThrough<InputTextPassThroughOptions>;
    knob?: DefaultPassThrough<KnobPassThroughOptions>;
    listbox?: DefaultPassThrough<ListboxPassThroughOptions>;
    megamenu?: DefaultPassThrough<MegaMenuPassThroughOptions>;
    menu?: DefaultPassThrough<MenuPassThroughOptions>;
    menubar?: DefaultPassThrough<MenubarPassThroughOptions>;
    message?: DefaultPassThrough<MessagePassThroughOptions>;
    multiselect?: DefaultPassThrough<MultiSelectPassThroughOptions>;
    orderlist?: DefaultPassThrough<OrderListPassThroughOptions>;
    organizationchart?: DefaultPassThrough<OrganizationChartPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Popover instead.
     */
    overlaypanel?: DefaultPassThrough<OverlayPanelPassThroughOptions>;
    paginator?: DefaultPassThrough<PaginatorPassThroughOptions>;
    panel?: DefaultPassThrough<PanelPassThroughOptions>;
    panelmenu?: DefaultPassThrough<PanelMenuPassThroughOptions>;
    password?: DefaultPassThrough<PasswordPassThroughOptions>;
    picklist?: DefaultPassThrough<PickListPassThroughOptions>;
    popover?: DefaultPassThrough<PopoverPassThroughOptions>;
    progressbar?: DefaultPassThrough<ProgressBarPassThroughOptions>;
    progressspinner?: DefaultPassThrough<ProgressSpinnerPassThroughOptions>;
    radiobutton?: DefaultPassThrough<RadioButtonPassThroughOptions>;
    rating?: DefaultPassThrough<RatingPassThroughOptions>;
    row?: DefaultPassThrough<RowPassThroughOptions>;
    scrollpanel?: DefaultPassThrough<ScrollPanelPassThroughOptions>;
    scrolltop?: DefaultPassThrough<ScrollTopPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Drawer instead.
     */
    sidebar?: DefaultPassThrough<SidebarPassThroughOptions>;
    skeleton?: DefaultPassThrough<SkeletonPassThroughOptions>;
    slider?: DefaultPassThrough<SliderPassThroughOptions>;
    speeddial?: DefaultPassThrough<SpeedDialPassThroughOptions>;
    selectbutton?: DefaultPassThrough<SelectButtonPassThroughOptions>;
    select?: DefaultPassThrough<SelectPassThroughOptions>;
    splitbutton?: DefaultPassThrough<SplitButtonPassThroughOptions>;
    splitter?: DefaultPassThrough<SplitterPassThroughOptions>;
    splitterpanel?: DefaultPassThrough<SplitterPanelPassThroughOptions>;
    steps?: DefaultPassThrough<StepsPassThroughOptions>;
    tabmenu?: DefaultPassThrough<TabMenuPassThroughOptions>;
    tabs?: DefaultPassThrough<TabsPassThroughOptions>;
    tablist?: DefaultPassThrough<TabListPassThroughOptions>;
    tab?: DefaultPassThrough<TabPassThroughOptions>;
    tabpanels?: DefaultPassThrough<TabPanelsPassThroughOptions>;
    tabpanel?: DefaultPassThrough<TabPanelPassThroughOptions>;
    /**
     * @deprecated since v4. Use tabs instead.
     */
    tabview?: DefaultPassThrough<TabViewPassThroughOptions>;
    tag?: DefaultPassThrough<TagPassThroughOptions>;
    terminal?: DefaultPassThrough<TerminalPassThroughOptions>;
    textarea?: DefaultPassThrough<TextareaPassThroughOptions>;
    tieredmenu?: DefaultPassThrough<TieredMenuPassThroughOptions>;
    timeline?: DefaultPassThrough<TimelinePassThroughOptions>;
    toast?: DefaultPassThrough<ToastPassThroughOptions>;
    togglebutton?: DefaultPassThrough<ToggleButtonPassThroughOptions>;
    toggleswitch?: DefaultPassThrough<ToggleSwitchPassThroughOptions>;
    toolbar?: DefaultPassThrough<ToolbarPassThroughOptions>;
    tree?: DefaultPassThrough<TreePassThroughOptions>;
    treeselect?: DefaultPassThrough<TreeSelectPassThroughOptions>;
    treetable?: DefaultPassThrough<TreeTablePassThroughOptions>;
    virtualscroller?: DefaultPassThrough<VirtualScrollerPassThroughOptions>;
    directives?: {
        badge?: BadgeDirectivePassThroughOptions;
        tooltip?: TooltipDirectivePassThroughOptions;
        styleclass?: StyleClassDirectivePassThroughOptions;
        focustrap?: FocusTrapDirectivePassThroughOptions;
        ripple?: RippleDirectivePassThroughOptions;
        animate?: AnimateOnScrollDirectivePassThroughOptions;
    };
    global?: {
        css?: ((options: any) => string | undefined) | string | undefined;
    };
}

export interface PrimeVueLocaleAriaOptions {
    trueLabel?: string;
    falseLabel?: string;
    nullLabel?: string;
    star?: string;
    stars?: string;
    selectAll?: string;
    unselectAll?: string;
    close?: string;
    previous?: string;
    next?: string;
    navigation?: string;
    scrollTop?: string;
    moveUp?: string;
    moveTop?: string;
    moveDown?: string;
    moveBottom?: string;
    moveToTarget?: string;
    moveToSource?: string;
    moveAllToTarget?: string;
    moveAllToSource?: string;
    pageLabel?: string;
    firstPageLabel?: string;
    lastPageLabel?: string;
    nextPageLabel?: string;
    prevPageLabel?: string;
    rowsPerPageLabel?: string;
    jumpToPageDropdownLabel?: string;
    jumpToPageInputLabel?: string;
    selectRow?: string;
    unselectRow?: string;
    expandRow?: string;
    collapseRow?: string;
    showFilterMenu?: string;
    hideFilterMenu?: string;
    filterOperator?: string;
    filterConstraint?: string;
    editRow?: string;
    saveEdit?: string;
    cancelEdit?: string;
    listView?: string;
    gridView?: string;
    slide?: string;
    slideNumber?: string;
    zoomImage?: string;
    zoomIn?: string;
    zoomOut?: string;
    rotateRight?: string;
    rotateLeft?: string;
    listLabel?: string;
}

export interface PrimeVueLocaleOptions {
    startsWith?: string;
    contains?: string;
    notContains?: string;
    endsWith?: string;
    equals?: string;
    notEquals?: string;
    noFilter?: string;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    dateIs?: string;
    dateIsNot?: string;
    dateBefore?: string;
    dateAfter?: string;
    clear?: string;
    apply?: string;
    matchAll?: string;
    matchAny?: string;
    addRule?: string;
    removeRule?: string;
    accept?: string;
    reject?: string;
    choose?: string;
    upload?: string;
    cancel?: string;
    completed?: string;
    pending?: string;
    fileSizeTypes: string[];
    dayNames: string[];
    dayNamesShort: string[];
    dayNamesMin: string[];
    monthNames: string[];
    monthNamesShort: string[];
    chooseYear?: string;
    chooseMonth?: string;
    chooseDate?: string;
    prevDecade?: string;
    nextDecade?: string;
    prevYear?: string;
    nextYear?: string;
    prevMonth?: string;
    nextMonth?: string;
    prevHour?: string;
    nextHour?: string;
    prevMinute?: string;
    nextMinute?: string;
    prevSecond?: string;
    nextSecond?: string;
    am?: string;
    pm?: string;
    today?: string;
    weekHeader?: string;
    firstDayOfWeek?: number;
    showMonthAfterYear?: boolean;
    dateFormat?: string;
    weak?: string;
    medium?: string;
    strong?: string;
    passwordPrompt?: string;
    emptyFilterMessage?: string;
    searchMessage?: string;
    selectionMessage?: string;
    emptySelectionMessage?: string;
    emptySearchMessage?: string;
    emptyMessage?: string;
    fileChosenMessage?: string;
    emptyFileChosenMessage?: string;
    aria?: PrimeVueLocaleAriaOptions;
}

export declare function usePrimeVue(): {
    config: PrimeVueConfiguration;
};

declare const plugin: Plugin;
export default plugin;

declare module 'vue/types/vue' {
    interface Vue {
        $primevue: {
            config: PrimeVueConfiguration;
        };
    }
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $primevue: {
            config: PrimeVueConfiguration;
        };
    }
}
