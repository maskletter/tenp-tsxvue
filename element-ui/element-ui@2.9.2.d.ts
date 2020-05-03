/**
* 对应
* "element-ui": "^2.9.2"
*/

import Vue, { VNode } from 'vue'
import 'element-ui'
import 'Vue'
import * as Css from 'csstype';
import { ElAlert } from 'element-ui/types/alert';
import { ElAside } from 'element-ui/types/aside';
import { ElAutocomplete } from 'element-ui/types/autocomplete';
import { ElBacktop } from 'element-ui/types/backtop';
import { ElBadge } from 'element-ui/types/badge';
import { ElBreadcrumbItem } from 'element-ui/types/breadcrumb-item';
import { ElBreadcrumb } from 'element-ui/types/breadcrumb';
import { ElButtonGroup } from 'element-ui/types/button-group';
import { ElButton } from 'element-ui/types/button';
import { ElCalendar } from 'element-ui/types/calendar';
import { ElCard } from 'element-ui/types/card';
import { ElCarouselItem } from 'element-ui/types/carousel-item';
import { ElCarousel } from 'element-ui/types/carousel';
import { ElCascaderPanel } from 'element-ui/types/cascader-panel';
import { ElCascader } from 'element-ui/types/cascader';
import { ElCheckboxButton } from 'element-ui/types/checkbox-button';
import { ElCheckboxGroup } from 'element-ui/types/checkbox-group';
import { ElCheckbox } from 'element-ui/types/checkbox';
import { ElCol } from 'element-ui/types/col';
import { ElCollapseItem } from 'element-ui/types/collapse-item';
import { ElCollapse } from 'element-ui/types/collapse';
import { ElColorPicker } from 'element-ui/types/color-picker';
import { ElContainer } from 'element-ui/types/container';
import { ElDatePicker } from 'element-ui/types/date-picker';
import { ElDialog } from 'element-ui/types/dialog';
import { ElDivider } from 'element-ui/types/divider';
import { ElDropdownItem } from 'element-ui/types/dropdown-item';
import { ElDropdownMenu } from 'element-ui/types/dropdown-menu';
import { ElDropdown } from 'element-ui/types/dropdown';
import { ElFooter } from 'element-ui/types/footer';
import { ElFormItem } from 'element-ui/types/form-item';
import { ElForm } from 'element-ui/types/form';
import { ElHeader } from 'element-ui/types/header';
import { ElIcon } from 'element-ui/types/icon';
import { ElImage } from 'element-ui/types/image';
import { ElInputNumber } from 'element-ui/types/input-number';
import { ElInput } from 'element-ui/types/input';
import { ElLink } from 'element-ui/types/link';
import { ElMain } from 'element-ui/types/main';
import { ElMenuItemGroup } from 'element-ui/types/menu-item-group';
import { ElMenuItem } from 'element-ui/types/menu-item';
import { ElMenu } from 'element-ui/types/menu';
import { ElOptionGroup } from 'element-ui/types/option-group';
import { ElOption } from 'element-ui/types/option';
import { ElPageHeader } from 'element-ui/types/page-header';
import { ElPagination } from 'element-ui/types/pagination';
import { ElPopover } from 'element-ui/types/popover';
import { ElProgress } from 'element-ui/types/progress';
import { ElRadioButton } from 'element-ui/types/radio-button';
import { ElRadioGroup } from 'element-ui/types/radio-group';
import { ElRadio } from 'element-ui/types/radio';
import { ElRate } from 'element-ui/types/rate';
import { ElRow } from 'element-ui/types/row';
import { ElSelect } from 'element-ui/types/select';
import { ElSlider } from 'element-ui/types/slider';
import { ElStep } from 'element-ui/types/step';
import { ElSteps } from 'element-ui/types/steps';
import { ElSubmenu } from 'element-ui/types/submenu';
import { ElSwitch } from 'element-ui/types/switch';
import { ElTabPane } from 'element-ui/types/tab-pane';
import { ElTableColumn } from 'element-ui/types/table-column';
import { ElTable } from 'element-ui/types/table';
import { ElTabs } from 'element-ui/types/tabs';
import { ElTag } from 'element-ui/types/tag';
import { ElTimePicker } from 'element-ui/types/time-picker';
import { ElTimeSelect } from 'element-ui/types/time-select';
import { ElTimelineItem } from 'element-ui/types/timeline-item';
import { ElTimeline } from 'element-ui/types/timeline';
import { ElTooltip } from 'element-ui/types/tooltip';
import { ElTransfer } from 'element-ui/types/transfer';
import { ElTree } from 'element-ui/types/tree';
import { ElUpload } from 'element-ui/types/upload';


interface CommonProps<T> {
    children?: VNode|string|VNode[]
    id?: string
    class?: string|string[]|object
    style?: Css.Properties
    props?: T,
    attrs?: T,
    on?: {
        [props: string]: any
    },
    nativeOn?: {
        [props: string]: any
    },
    directives?: any[],
    scopedSlots?: {
        [props: string]: (...argv: any) => VNode|VNode[]|string
    },
    domProps?: {
        [props: string]: any
    }
    refInFor?: boolean
    [key: string]: any
}
declare module 'element-ui' {

    class Alert extends ElAlert {
        constructor(props: {  [index in keyof ElAlert]?: ElAlert[index]; }&CommonProps<{  [index in keyof ElAlert]?: ElAlert[index]; } >)
    }
    class Aside extends ElAside {
        constructor(props: {  [index in keyof ElAside]?: ElAside[index]; }&CommonProps<{  [index in keyof ElAside]?: ElAside[index]; } >)
    }
    class Autocomplete extends ElAutocomplete {
        constructor(props: {  [index in keyof ElAutocomplete]?: ElAutocomplete[index]; }&CommonProps<{  [index in keyof ElAutocomplete]?: ElAutocomplete[index]; } >)
    }
    class Backtop extends ElBacktop {
        constructor(props: {  [index in keyof ElBacktop]?: ElBacktop[index]; }&CommonProps<{  [index in keyof ElBacktop]?: ElBacktop[index]; } >)
    }
    class Badge extends ElBadge {
        constructor(props: {  [index in keyof ElBadge]?: ElBadge[index]; }&CommonProps<{  [index in keyof ElBadge]?: ElBadge[index]; } >)
    }
    class BreadcrumbItem extends ElBreadcrumbItem {
        constructor(props: {  [index in keyof ElBreadcrumbItem]?: ElBreadcrumbItem[index]; }&CommonProps<{  [index in keyof ElBreadcrumbItem]?: ElBreadcrumbItem[index]; } >)
    }
    class Breadcrumb extends ElBreadcrumb {
        constructor(props: {  [index in keyof ElBreadcrumb]?: ElBreadcrumb[index]; }&CommonProps<{  [index in keyof ElBreadcrumb]?: ElBreadcrumb[index]; } >)
    }
    class ButtonGroup extends ElButtonGroup {
        constructor(props: {  [index in keyof ElButtonGroup]?: ElButtonGroup[index]; }&CommonProps<{  [index in keyof ElButtonGroup]?: ElButtonGroup[index]; } >)
    }
    class Button extends ElButton {
        constructor(props: {  [index in keyof ElButton]?: ElButton[index]; }&CommonProps<{  [index in keyof ElButton]?: ElButton[index]; } >)
    }
    class Calendar extends ElCalendar {
        constructor(props: {  [index in keyof ElCalendar]?: ElCalendar[index]; }&CommonProps<{  [index in keyof ElCalendar]?: ElCalendar[index]; } >)
    }
    class Card extends ElCard {
        constructor(props: {  [index in keyof ElCard]?: ElCard[index]; }&CommonProps<{  [index in keyof ElCard]?: ElCard[index]; } >)
    }
    class CarouselItem extends ElCarouselItem {
        constructor(props: {  [index in keyof ElCarouselItem]?: ElCarouselItem[index]; }&CommonProps<{  [index in keyof ElCarouselItem]?: ElCarouselItem[index]; } >)
    }
    class Carousel extends ElCarousel {
        constructor(props: {  [index in keyof ElCarousel]?: ElCarousel[index]; }&CommonProps<{  [index in keyof ElCarousel]?: ElCarousel[index]; } >)
    }
    class CascaderPanel extends ElCascaderPanel {
        constructor(props: {  [index in keyof ElCascaderPanel]?: ElCascaderPanel[index]; }&CommonProps<{  [index in keyof ElCascaderPanel]?: ElCascaderPanel[index]; } >)
    }
    class Cascader extends ElCascader {
        constructor(props: {  [index in keyof ElCascader]?: ElCascader[index]; }&CommonProps<{  [index in keyof ElCascader]?: ElCascader[index]; } >)
    }
    class CheckboxButton extends ElCheckboxButton {
        constructor(props: {  [index in keyof ElCheckboxButton]?: ElCheckboxButton[index]; }&CommonProps<{  [index in keyof ElCheckboxButton]?: ElCheckboxButton[index]; } >)
    }
    class CheckboxGroup extends ElCheckboxGroup {
        constructor(props: {  [index in keyof ElCheckboxGroup]?: ElCheckboxGroup[index]; }&CommonProps<{  [index in keyof ElCheckboxGroup]?: ElCheckboxGroup[index]; } >)
    }
    class Checkbox extends ElCheckbox {
        constructor(props: {  [index in keyof ElCheckbox]?: ElCheckbox[index]; }&CommonProps<{  [index in keyof ElCheckbox]?: ElCheckbox[index]; } >)
    }
    class Col extends ElCol {
        constructor(props: {  [index in keyof ElCol]?: ElCol[index]; }&CommonProps<{  [index in keyof ElCol]?: ElCol[index]; } >)
    }
    class CollapseItem extends ElCollapseItem {
        constructor(props: {  [index in keyof ElCollapseItem]?: ElCollapseItem[index]; }&CommonProps<{  [index in keyof ElCollapseItem]?: ElCollapseItem[index]; } >)
    }
    class Collapse extends ElCollapse {
        constructor(props: {  [index in keyof ElCollapse]?: ElCollapse[index]; }&CommonProps<{  [index in keyof ElCollapse]?: ElCollapse[index]; } >)
    }
    class ColorPicker extends ElColorPicker {
        constructor(props: {  [index in keyof ElColorPicker]?: ElColorPicker[index]; }&CommonProps<{  [index in keyof ElColorPicker]?: ElColorPicker[index]; } >)
    }
    class Container extends ElContainer {
        constructor(props: {  [index in keyof ElContainer]?: ElContainer[index]; }&CommonProps<{  [index in keyof ElContainer]?: ElContainer[index]; } >)
    }
    class DatePicker extends ElDatePicker {
        constructor(props: {  [index in keyof ElDatePicker]?: ElDatePicker[index]; }&CommonProps<{  [index in keyof ElDatePicker]?: ElDatePicker[index]; } >)
    }
    class Dialog extends ElDialog {
        constructor(props: {  [index in keyof ElDialog]?: ElDialog[index]; }&CommonProps<{  [index in keyof ElDialog]?: ElDialog[index]; } >)
    }
    class Divider extends ElDivider {
        constructor(props: {  [index in keyof ElDivider]?: ElDivider[index]; }&CommonProps<{  [index in keyof ElDivider]?: ElDivider[index]; } >)
    }
    class DropdownItem extends ElDropdownItem {
        constructor(props: {  [index in keyof ElDropdownItem]?: ElDropdownItem[index]; }&CommonProps<{  [index in keyof ElDropdownItem]?: ElDropdownItem[index]; } >)
    }
    class DropdownMenu extends ElDropdownMenu {
        constructor(props: {  [index in keyof ElDropdownMenu]?: ElDropdownMenu[index]; }&CommonProps<{  [index in keyof ElDropdownMenu]?: ElDropdownMenu[index]; } >)
    }
    class Dropdown extends ElDropdown {
        constructor(props: {  [index in keyof ElDropdown]?: ElDropdown[index]; }&CommonProps<{  [index in keyof ElDropdown]?: ElDropdown[index]; } >)
    }
    class Footer extends ElFooter {
        constructor(props: {  [index in keyof ElFooter]?: ElFooter[index]; }&CommonProps<{  [index in keyof ElFooter]?: ElFooter[index]; } >)
    }
    class FormItem extends ElFormItem {
        constructor(props: {  [index in keyof ElFormItem]?: ElFormItem[index]; }&CommonProps<{  [index in keyof ElFormItem]?: ElFormItem[index]; } >)
    }
    class Form extends ElForm {
        constructor(props: {  [index in keyof ElForm]?: ElForm[index]; }&CommonProps<{  [index in keyof ElForm]?: ElForm[index]; } >)
    }
    class Header extends ElHeader {
        constructor(props: {  [index in keyof ElHeader]?: ElHeader[index]; }&CommonProps<{  [index in keyof ElHeader]?: ElHeader[index]; } >)
    }
    class Icon extends ElIcon {
        constructor(props: {  [index in keyof ElIcon]?: ElIcon[index]; }&CommonProps<{  [index in keyof ElIcon]?: ElIcon[index]; } >)
    }
    class Image extends ElImage {
        constructor(props: {  [index in keyof ElImage]?: ElImage[index]; }&CommonProps<{  [index in keyof ElImage]?: ElImage[index]; } >)
    }
    class InputNumber extends ElInputNumber {
        constructor(props: {  [index in keyof ElInputNumber]?: ElInputNumber[index]; }&CommonProps<{  [index in keyof ElInputNumber]?: ElInputNumber[index]; } >)
    }
    class Input extends ElInput {
        constructor(props: {  [index in keyof ElInput]?: ElInput[index]; }&CommonProps<{  [index in keyof ElInput]?: ElInput[index]; } >)
    }
    class Link extends ElLink {
        constructor(props: {  [index in keyof ElLink]?: ElLink[index]; }&CommonProps<{  [index in keyof ElLink]?: ElLink[index]; } >)
    }
    class Main extends ElMain {
        constructor(props: {  [index in keyof ElMain]?: ElMain[index]; }&CommonProps<{  [index in keyof ElMain]?: ElMain[index]; } >)
    }
    class MenuItemGroup extends ElMenuItemGroup {
        constructor(props: {  [index in keyof ElMenuItemGroup]?: ElMenuItemGroup[index]; }&CommonProps<{  [index in keyof ElMenuItemGroup]?: ElMenuItemGroup[index]; } >)
    }
    class MenuItem extends ElMenuItem {
        constructor(props: {  [index in keyof ElMenuItem]?: ElMenuItem[index]; }&CommonProps<{  [index in keyof ElMenuItem]?: ElMenuItem[index]; } >)
    }
    class Menu extends ElMenu {
        constructor(props: {  [index in keyof ElMenu]?: ElMenu[index]; }&CommonProps<{  [index in keyof ElMenu]?: ElMenu[index]; } >)
    }
    class OptionGroup extends ElOptionGroup {
        constructor(props: {  [index in keyof ElOptionGroup]?: ElOptionGroup[index]; }&CommonProps<{  [index in keyof ElOptionGroup]?: ElOptionGroup[index]; } >)
    }
    class Option extends ElOption {
        constructor(props: {  [index in keyof ElOption]?: ElOption[index]; }&CommonProps<{  [index in keyof ElOption]?: ElOption[index]; } >)
    }
    class PageHeader extends ElPageHeader {
        constructor(props: {  [index in keyof ElPageHeader]?: ElPageHeader[index]; }&CommonProps<{  [index in keyof ElPageHeader]?: ElPageHeader[index]; } >)
    }
    class Pagination extends ElPagination {
        constructor(props: {  [index in keyof ElPagination]?: ElPagination[index]; }&CommonProps<{  [index in keyof ElPagination]?: ElPagination[index]; } >&{
            /**是否为分页按钮添加背景色 */
            background?: boolean
            /**只有一页时是否隐藏 */
            hideOnSinglePage?: boolean
            /**是否禁用 */
            disabled?: boolean
            /**currentPage 改变时会触发 */
            'onCurrent-change'?:(page: number) => void
            /**pageSize 改变时会触发 */
            'onSize-change'?: (page: number) => void
            /**用户点击上一页按钮改变当前页后触发 */
            'onPrev-click'?: (page: number) => void
            /**用户点击下一页按钮改变当前页后触发 */
            'onNext-click'?: (page: number) => void
        })
    }
    class Popover extends ElPopover {
        constructor(props: {  [index in keyof ElPopover]?: ElPopover[index]; }&CommonProps<{  [index in keyof ElPopover]?: ElPopover[index]; } >)
    }
    class Progress extends ElProgress {
        constructor(props: {  [index in keyof ElProgress]?: ElProgress[index]; }&CommonProps<{  [index in keyof ElProgress]?: ElProgress[index]; } >)
    }
    class RadioButton extends ElRadioButton {
        constructor(props: {  [index in keyof ElRadioButton]?: ElRadioButton[index]; }&CommonProps<{  [index in keyof ElRadioButton]?: ElRadioButton[index]; } >)
    }
    class RadioGroup extends ElRadioGroup {
        constructor(props: {  [index in keyof ElRadioGroup]?: ElRadioGroup[index]; }&CommonProps<{  [index in keyof ElRadioGroup]?: ElRadioGroup[index]; } >)
    }
    class Radio extends ElRadio {
        constructor(props: {  [index in keyof ElRadio]?: ElRadio[index]; }&CommonProps<{  [index in keyof ElRadio]?: ElRadio[index]; } >)
    }
    class Rate extends ElRate {
        constructor(props: {  [index in keyof ElRate]?: ElRate[index]; }&CommonProps<{  [index in keyof ElRate]?: ElRate[index]; } >)
    }
    class Row extends ElRow {
        constructor(props: {  [index in keyof ElRow]?: ElRow[index]; }&CommonProps<{  [index in keyof ElRow]?: ElRow[index]; } >)
    }
    class Select extends ElSelect {
        constructor(props: {  [index in keyof ElSelect]?: ElSelect[index]; }&CommonProps<{  [index in keyof ElSelect]?: ElSelect[index]; } >)
    }
    class Slider extends ElSlider {
        constructor(props: {  [index in keyof ElSlider]?: ElSlider[index]; }&CommonProps<{  [index in keyof ElSlider]?: ElSlider[index]; } >)
    }
    class Step extends ElStep {
        constructor(props: {  [index in keyof ElStep]?: ElStep[index]; }&CommonProps<{  [index in keyof ElStep]?: ElStep[index]; } >)
    }
    class Steps extends ElSteps {
        constructor(props: {  [index in keyof ElSteps]?: ElSteps[index]; }&CommonProps<{  [index in keyof ElSteps]?: ElSteps[index]; } >)
    }
    class Submenu extends ElSubmenu {
        constructor(props: {  [index in keyof ElSubmenu]?: ElSubmenu[index]; }&CommonProps<{  [index in keyof ElSubmenu]?: ElSubmenu[index]; } >)
    }
    class Switch extends ElSwitch {
        constructor(props: {  [index in keyof ElSwitch]?: ElSwitch[index]; }&CommonProps<{  [index in keyof ElSwitch]?: ElSwitch[index]; } >)
    }
    class TabPane extends ElTabPane {
        constructor(props: {  [index in keyof ElTabPane]?: ElTabPane[index]; }&CommonProps<{  [index in keyof ElTabPane]?: ElTabPane[index]; } >)
    }
    class TableColumn extends ElTableColumn {
        constructor(props: {  [index in keyof ElTableColumn]?: ElTableColumn[index]; }&CommonProps<{  [index in keyof ElTableColumn]?: ElTableColumn[index]; } >)
    }
    class Table extends ElTable {
        constructor(props: {  [index in keyof ElTable]?: ElTable[index]; }&CommonProps<{  [index in keyof ElTable]?: ElTable[index]; } >)
    }
    class Tabs extends ElTabs {
        constructor(props: {  [index in keyof ElTabs]?: ElTabs[index]; }&CommonProps<{  [index in keyof ElTabs]?: ElTabs[index]; } >)
    }
    class Tag extends ElTag {
        constructor(props: {  [index in keyof ElTag]?: ElTag[index]; }&CommonProps<{  [index in keyof ElTag]?: ElTag[index]; } >)
    }
    class TimePicker extends ElTimePicker {
        constructor(props: {  [index in keyof ElTimePicker]?: ElTimePicker[index]; }&CommonProps<{  [index in keyof ElTimePicker]?: ElTimePicker[index]; } >)
    }
    class TimeSelect extends ElTimeSelect {
        constructor(props: {  [index in keyof ElTimeSelect]?: ElTimeSelect[index]; }&CommonProps<{  [index in keyof ElTimeSelect]?: ElTimeSelect[index]; } >)
    }
    class TimelineItem extends ElTimelineItem {
        constructor(props: {  [index in keyof ElTimelineItem]?: ElTimelineItem[index]; }&CommonProps<{  [index in keyof ElTimelineItem]?: ElTimelineItem[index]; } >)
    }
    class Timeline extends ElTimeline {
        constructor(props: {  [index in keyof ElTimeline]?: ElTimeline[index]; }&CommonProps<{  [index in keyof ElTimeline]?: ElTimeline[index]; } >)
    }
    class Tooltip extends ElTooltip {
        constructor(props: {  [index in keyof ElTooltip]?: ElTooltip[index]; }&CommonProps<{  [index in keyof ElTooltip]?: ElTooltip[index]; } >)
    }
    class Transfer extends ElTransfer {
        constructor(props: {  [index in keyof ElTransfer]?: ElTransfer[index]; }&CommonProps<{  [index in keyof ElTransfer]?: ElTransfer[index]; } >)
    }
    class Tree extends ElTree<any,any> {
        constructor(props: {  [index in keyof ElTree<any,any>]?: ElTree<any,any>[index]; }&CommonProps<{  [index in keyof ElTree<any,any>]?: ElTree<any,any>[index]; } >)
    }
    class Upload extends ElUpload {
        constructor(props: {  [index in keyof ElUpload]?: ElUpload[index]; }&CommonProps<{  [index in keyof ElUpload]?: ElUpload[index]; } >)
    }
}
