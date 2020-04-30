/**
 * 对应
 * "element-ui": "^2.13.1"
 */

import Vue from 'vue'
import 'element-ui'
import 'Vue'
import { ElAlert } from 'element-ui/types/alert'
import { ElAside } from 'element-ui/types/aside'
import { ElAutocomplete } from 'element-ui/types/autocomplete'
import { ElBadge } from 'element-ui/types/badge'
import { ElBreadcrumb } from 'element-ui/types/breadcrumb'
import { ElBreadcrumbItem } from 'element-ui/types/breadcrumb-item'
import { ElButton } from 'element-ui/types/button'
import { ElButtonGroup } from 'element-ui/types/button-group'
import { ElCard } from 'element-ui/types/card'
import { ElCarousel } from 'element-ui/types/carousel'
import { ElCarouselItem } from 'element-ui/types/carousel-item'
import { ElCascader } from 'element-ui/types/cascader'
import { ElCheckbox } from 'element-ui/types/checkbox'
import { ElCheckboxButton } from 'element-ui/types/checkbox-button'
import { ElCheckboxGroup } from 'element-ui/types/checkbox-group'
import { ElCol } from 'element-ui/types/col'
import { ElCollapse } from 'element-ui/types/collapse'
import { ElCollapseItem } from 'element-ui/types/collapse-item'
import { ElColorPicker } from 'element-ui/types/color-picker'
import { ElContainer } from 'element-ui/types/container'
import { ElDatePicker } from 'element-ui/types/date-picker'
import { ElDialog } from 'element-ui/types/dialog'
import { ElDropdown } from 'element-ui/types/dropdown'
import { ElDropdownItem } from 'element-ui/types/dropdown-item'
import { ElDropdownMenu } from 'element-ui/types/dropdown-menu'
import { ElFooter } from 'element-ui/types/footer'
import { ElForm } from 'element-ui/types/form'
import { ElFormItem } from 'element-ui/types/form-item'
import { ElHeader } from 'element-ui/types/header'
import { ElInput } from 'element-ui/types/input'
import { ElInputNumber } from 'element-ui/types/input-number'
import { ElLoading } from 'element-ui/types/loading'
import { ElMain } from 'element-ui/types/main'
import { ElMenu } from 'element-ui/types/menu'
import { ElMenuItem } from 'element-ui/types/menu-item'
import { ElMenuItemGroup } from 'element-ui/types/menu-item-group'
import { ElMessage } from 'element-ui/types/message'
import { ElMessageBox } from 'element-ui/types/message-box'
import { ElNotification } from 'element-ui/types/notification'
import { ElOption } from 'element-ui/types/option'
import { ElOptionGroup } from 'element-ui/types/option-group'
import { ElPagination } from 'element-ui/types/pagination'
import { ElPopover } from 'element-ui/types/popover'
import { ElProgress } from 'element-ui/types/progress'
import { ElRate } from 'element-ui/types/rate'
import { ElRadio } from 'element-ui/types/radio'
import { ElRadioButton } from 'element-ui/types/radio-button'
import { ElRadioGroup } from 'element-ui/types/radio-group'
import { ElRow } from 'element-ui/types/row'
import { ElSelect } from 'element-ui/types/select'
import { ElSlider } from 'element-ui/types/slider'
import { ElStep } from 'element-ui/types/step'
import { ElSteps } from 'element-ui/types/steps'
import { ElSubmenu } from 'element-ui/types/submenu'
import { ElSwitch } from 'element-ui/types/switch'
import { ElTable } from 'element-ui/types/table'
import { ElTableColumn } from 'element-ui/types/table-column'
import { ElTag } from 'element-ui/types/tag'
import { ElTabs } from 'element-ui/types/tabs'
import { ElTabPane } from 'element-ui/types/tab-pane'
import { ElTimeline } from 'element-ui/types/timeline'
import { ElTimelineItem } from 'element-ui/types/timeline-item'
import { ElTimePicker } from 'element-ui/types/time-picker'
import { ElTimeSelect } from 'element-ui/types/time-select'
import { ElTooltip } from 'element-ui/types/tooltip'
import { ElTransfer } from 'element-ui/types/transfer'
import { ElTree, TreeData } from 'element-ui/types/tree'
import { ElUpload } from 'element-ui/types/upload'
import { ElLink } from 'element-ui/types/link'
import { ElDivider } from 'element-ui/types/divider'
import { ElIcon } from 'element-ui/types/icon'
import { ElCalendar } from 'element-ui/types/calendar'
import { ElImage } from 'element-ui/types/image'
import { ElBacktop } from 'element-ui/types/backtop'
import { ElInfiniteScroll } from 'element-ui/types/infinite-scroll'
import { ElPageHeader } from 'element-ui/types/page-header'
import { ElAvatar } from 'element-ui/types/avatar'
import { ElDrawer } from 'element-ui/types/drawer'
import { ElPopconfirm } from 'element-ui/types/popconfirm'
import { VNode } from 'vue'

// interface common {

// }
interface CommonProps {
    children?: VNode|string
    id?: string
    class?: string
    style?: string
}

declare module 'element-ui' {
   
    
    class Alert extends Vue {
        constructor(props: {  [index in keyof ElAlert]?: ElAlert[index]; }&CommonProps)
    }
    class Aside extends Vue {
        constructor(props: {  [index in keyof ElAside]?: ElAside[index]; }&CommonProps)
    }
    class Autocomplete extends Vue {
        constructor(props: {  [index in keyof ElAutocomplete]?: ElAutocomplete[index]; }&CommonProps)
    }
    class Badge extends Vue {
        constructor(props: {  [index in keyof ElBadge]?: ElBadge[index]; }&CommonProps)
    }
    class Breadcrumb extends Vue {
        constructor(props: {  [index in keyof ElBreadcrumb]?: ElBreadcrumb[index]; }&CommonProps)
    }
    class BreadcrumbItem extends Vue {
        constructor(props: {  [index in keyof ElBreadcrumbItem]?: ElBreadcrumbItem[index]; }&CommonProps )
    }
    class Button extends Vue {
        constructor(props: { [index in keyof ElButton]?: ElButton[index]; }&CommonProps )
    }
    class ButtonGroup extends Vue {
        constructor(props: {  [index in keyof ElButtonGroup]?: ElButtonGroup[index]; }&CommonProps )
    }
    class Card extends Vue {
        constructor(props: {  [index in keyof ElCard]?: ElCard[index]; }&CommonProps)
    }
    class Carousel extends Vue {
        constructor(props: {  [index in keyof ElCarousel]?: ElCarousel[index]; }&CommonProps )
    }
    class CarouselItem extends Vue {
        constructor(props: {  [index in keyof ElCarouselItem]?: ElCarouselItem[index]; }&CommonProps )
    }
    class Cascader extends Vue {
        constructor(props: {  [index in keyof ElCascader]?: ElCascader[index]; }&CommonProps )
    }
    class Checkbox extends Vue {
        constructor(props: {  [index in keyof ElCheckbox]?: ElCheckbox[index]; }&CommonProps )
    }
    class CheckboxButton extends Vue {
        constructor(props: {  [index in keyof ElCheckboxButton]?: ElCheckboxButton[index]; }&CommonProps )
    }
    class CheckboxGroup extends Vue {
        constructor(props: {  [index in keyof ElCheckboxGroup]?: ElCheckboxGroup[index]; }&CommonProps )
    }
    class Col extends Vue {
        constructor(props: {  [index in keyof ElCol]?: ElCol[index]; }&CommonProps )
    }
    class Collapse extends Vue {
        constructor(props: {  [index in keyof ElCollapse]?: ElCollapse[index]; }&CommonProps )
    }
    class CollapseItem extends Vue {
        constructor(props: {  [index in keyof ElCollapseItem]?: ElCollapseItem[index]; }&CommonProps )
    }
    class ColorPicker extends Vue {
        constructor(props: {  [index in keyof ElColorPicker]?: ElColorPicker[index]; }&CommonProps )
    }
    class Container extends Vue {
        constructor(props: {  [index in keyof ElContainer]?: ElContainer[index]; }&CommonProps )
    }
    class DatePicker extends Vue {
        constructor(props: {  [index in keyof ElDatePicker]?: ElDatePicker[index]; }&CommonProps )
    }
    class Dialog extends Vue {
        constructor(props: {  [index in keyof ElDialog]?: ElDialog[index]; }&CommonProps )
    }
    class Dropdown extends Vue {
        constructor(props: {  [index in keyof ElDropdown]?: ElDropdown[index]; }&CommonProps )
    }
    class DropdownItem extends Vue {
        constructor(props: {  [index in keyof ElDropdownItem]?: ElDropdownItem[index]; }&CommonProps )
    }
    class DropdownMenu extends Vue {
        constructor(props: {  [index in keyof ElDropdownMenu]?: ElDropdownMenu[index]; }&CommonProps )
    }
    class Footer extends Vue {
        constructor(props: {  [index in keyof ElFooter]?: ElFooter[index]; }&CommonProps )
    }
    class Form extends Vue {
        constructor(props: {  [index in keyof ElForm]?: ElForm[index]; }&CommonProps )
    }
    class FormItem extends Vue {
        constructor(props: {  [index in keyof ElFormItem]?: ElFormItem[index]; }&CommonProps )
    }
    class Header extends Vue {
        constructor(props: {  [index in keyof ElHeader]?: ElHeader[index]; }&CommonProps )
    }
    class Input extends Vue {
        constructor(props: {  [index in keyof ElInput]?: ElInput[index]; }&CommonProps )
    }
    class InputNumber extends Vue {
        constructor(props: {  [index in keyof ElInputNumber]?: ElInputNumber[index]; }&CommonProps )
    }
    
    class Main extends Vue {
        constructor(props: {  [index in keyof ElMain]?: ElMain[index]; }&CommonProps )
    }
    class Menu extends Vue {
        constructor(props: {  [index in keyof ElMenu]?: ElMenu[index]; }&CommonProps )
    }
    class MenuItem extends Vue {
        constructor(props: {  [index in keyof ElMenuItem]?: ElMenuItem[index]; }&CommonProps )
    }
    class MenuItemGroup extends Vue {
        constructor(props: {  [index in keyof ElMenuItemGroup]?: ElMenuItemGroup[index]; }&CommonProps )
    }
  
    class Notification extends Vue {
        constructor(props: {  [index in keyof ElNotification]?: ElNotification[index]; }&CommonProps )
    }
    class Option extends Vue {
        constructor(props: {  [index in keyof ElOption]?: ElOption[index]; }&CommonProps )
    }
    class OptionGroup extends Vue {
        constructor(props: {  [index in keyof ElOptionGroup]?: ElOptionGroup[index]; }&CommonProps )
    }
    class Pagination extends Vue {
        constructor(props: {  [index in keyof ElPagination]?: ElPagination[index]; }&CommonProps )
    }
    class Popover extends Vue {
        constructor(props: {  [index in keyof ElPopover]?: ElPopover[index]; }&CommonProps )
    }
    class Progress extends Vue {
        constructor(props: {  [index in keyof ElProgress]?: ElProgress[index]; }&CommonProps)
    }
    class Rate extends Vue {
        constructor(props: {  [index in keyof ElRate]?: ElRate[index]; }&CommonProps)
    }
    class Radio extends Vue {
        constructor(props: {  [index in keyof ElRadio]?: ElRadio[index]; }&CommonProps)
    }
    class RadioButton extends Vue {
        constructor(props: {  [index in keyof ElRadioButton]?: ElRadioButton[index]; }&CommonProps)
    }
    class RadioGroup extends Vue {
        constructor(props: {  [index in keyof ElRadioGroup]?: ElRadioGroup[index]; }&CommonProps)
    }
    class Row extends Vue {
        constructor(props: {  [index in keyof ElRow]?: ElRow[index]; }&CommonProps)
    }
    class Select extends Vue {
        constructor(props: {  [index in keyof ElSelect]?: ElSelect[index]; }&CommonProps)
    }
    class Slider extends Vue {
        constructor(props: {  [index in keyof ElSlider]?: ElSlider[index]; }&CommonProps)
    }
    class Step extends Vue {
        constructor(props: {  [index in keyof ElStep]?: ElStep[index]; }&CommonProps)
    }
    class Steps extends Vue {
        constructor(props: {  [index in keyof ElSteps]?: ElSteps[index]; }&CommonProps)
    }
    class Submenu extends Vue {
        constructor(props: {  [index in keyof ElSubmenu]?: ElSubmenu[index]; }&CommonProps)
    }
    class Switch extends Vue {
        constructor(props: {  [index in keyof ElSwitch]?: ElSwitch[index]; }&CommonProps)
    }
    class Table extends Vue {
        constructor(props: {  [index in keyof ElTable]?: ElTable[index]; }&CommonProps)
    }
    class TableColumn extends Vue {
        constructor(props: {  [index in keyof ElTableColumn]?: ElTableColumn[index]; }&CommonProps)
    }
    class Tag extends Vue {
        constructor(props: {  [index in keyof ElTag]?: ElTag[index]; }&CommonProps)
    }
    class Tabs extends Vue {
        constructor(props: {  [index in keyof ElTabs]?: ElTabs[index]; }&CommonProps)
    }
    class TabPane extends Vue {
        constructor(props: {  [index in keyof ElTabPane]?: ElTabPane[index]; }&CommonProps)
    }
    class Timeline extends Vue {
        constructor(props: {  [index in keyof ElTimeline]?: ElTimeline[index]; }&CommonProps)
    }
    class TimelineItem extends Vue {
        constructor(props: {  [index in keyof ElTimelineItem]?: ElTimelineItem[index]; }&CommonProps)
    }
    class TimePicker extends Vue {
        constructor(props: {  [index in keyof ElTimePicker]?: ElTimePicker[index]; }&CommonProps)
    }
    class TimeSelect extends Vue {
        constructor(props: {  [index in keyof ElTimeSelect]?: ElTimeSelect[index]; }&CommonProps)
    }
    class Tooltip extends Vue {
        constructor(props: {  [index in keyof ElTooltip]?: ElTooltip[index]; }&CommonProps)
    }
    class Transfer extends Vue {
        constructor(props: {  [index in keyof ElTransfer]?: ElTransfer[index]; }&CommonProps)
    }
    class Tree extends Vue {
        constructor(props: {  [index in keyof ElTree<any, any>]?: ElTree<any, any>[index]; }&CommonProps)
    }
    class Upload extends Vue {
        constructor(props: {  [index in keyof ElUpload]?: ElUpload[index]; }&CommonProps)
    }
    class Link extends Vue {
        constructor(props: {  [index in keyof ElLink]?: ElLink[index]; }&CommonProps)
    }
    class Divider extends Vue {
        constructor(props: {  [index in keyof ElDivider]?: ElDivider[index]; }&CommonProps)
    }
    class Icon extends Vue {
        constructor(props: {  [index in keyof ElIcon]?: ElIcon[index]; }&CommonProps)
    }
    class Calendar extends Vue {
        constructor(props: {  [index in keyof ElCalendar]?: ElCalendar[index]; }&CommonProps)
    }
    class Image extends Vue {
        constructor(props: {  [index in keyof ElImage]?: ElImage[index]; }&CommonProps)
    }
    class Backtop extends Vue {
        constructor(props: {  [index in keyof ElBacktop]?: ElBacktop[index]; }&CommonProps)
    }
    class InfiniteScroll extends Vue {
        constructor(props: {  [index in keyof ElInfiniteScroll]?: ElInfiniteScroll[index]; }&CommonProps)
    }
    class PageHeader extends Vue {
        constructor(props: {  [index in keyof ElPageHeader]?: ElPageHeader[index]; }&CommonProps)
    }
    class Avatar extends Vue {
        constructor(props: {  [index in keyof ElAvatar]?: ElAvatar[index]; }&CommonProps)
    }
    class Drawer extends Vue {
        constructor(props: {  [index in keyof ElDrawer]?: ElDrawer[index]; }&CommonProps)
    }
    class Popconfirm extends Vue {
        constructor(props: {  [index in keyof ElPopconfirm]?: ElPopconfirm[index]; }&CommonProps)
    }

   

}