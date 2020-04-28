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
import { VNode } from 'vue/types/umd'

// interface common {

// }

declare module 'element-ui' {
   
    
    class Alert extends Vue {
        constructor(props: {  [index in keyof ElAlert]?: ElAlert[index]; }&{ children?: VNode|string })
    }
    class Aside extends Vue {
        constructor(props: {  [index in keyof ElAside]?: ElAside[index]; }&{ children?: VNode|string })
    }
    class Autocomplete extends Vue {
        constructor(props: {  [index in keyof ElAutocomplete]?: ElAutocomplete[index]; }&{ children?: VNode|string })
    }
    class Badge extends Vue {
        constructor(props: {  [index in keyof ElBadge]?: ElBadge[index]; }&{ children?: VNode|string })
    }
    class Breadcrumb extends Vue {
        constructor(props: {  [index in keyof ElBreadcrumb]?: ElBreadcrumb[index]; }&{ children?: VNode|string })
    }
    class BreadcrumbItem extends Vue {
        constructor(props: {  [index in keyof ElBreadcrumbItem]?: ElBreadcrumbItem[index]; }&{ children?: VNode|string } )
    }
    class Button extends Vue {
        constructor(props: { [index in keyof ElButton]?: ElButton[index]; }&{ children?: VNode|string } )
    }
    class ButtonGroup extends Vue {
        constructor(props: {  [index in keyof ElButtonGroup]?: ElButtonGroup[index]; }&{ children?: VNode|string } )
    }
    class Card extends Vue {
        constructor(props: {  [index in keyof ElCard]?: ElCard[index]; }&{ children?: VNode|string } )
    }
    class Carousel extends Vue {
        constructor(props: {  [index in keyof ElCarousel]?: ElCarousel[index]; }&{ children?: VNode|string } )
    }
    class CarouselItem extends Vue {
        constructor(props: {  [index in keyof ElCarouselItem]?: ElCarouselItem[index]; }&{ children?: VNode|string } )
    }
    class Cascader extends Vue {
        constructor(props: {  [index in keyof ElCascader]?: ElCascader[index]; }&{ children?: VNode|string } )
    }
    class Checkbox extends Vue {
        constructor(props: {  [index in keyof ElCheckbox]?: ElCheckbox[index]; }&{ children?: VNode|string } )
    }
    class CheckboxButton extends Vue {
        constructor(props: {  [index in keyof ElCheckboxButton]?: ElCheckboxButton[index]; }&{ children?: VNode|string } )
    }
    class CheckboxGroup extends Vue {
        constructor(props: {  [index in keyof ElCheckboxGroup]?: ElCheckboxGroup[index]; }&{ children?: VNode|string } )
    }
    class Col extends Vue {
        constructor(props: {  [index in keyof ElCol]?: ElCol[index]; }&{ children?: VNode|string } )
    }
    class Collapse extends Vue {
        constructor(props: {  [index in keyof ElCollapse]?: ElCollapse[index]; }&{ children?: VNode|string } )
    }
    class CollapseItem extends Vue {
        constructor(props: {  [index in keyof ElCollapseItem]?: ElCollapseItem[index]; }&{ children?: VNode|string } )
    }
    class ColorPicker extends Vue {
        constructor(props: {  [index in keyof ElColorPicker]?: ElColorPicker[index]; }&{ children?: VNode|string } )
    }
    class Container extends Vue {
        constructor(props: {  [index in keyof ElContainer]?: ElContainer[index]; }&{ children?: VNode|string } )
    }
    class DatePicker extends Vue {
        constructor(props: {  [index in keyof ElDatePicker]?: ElDatePicker[index]; }&{ children?: VNode|string } )
    }
    class Dialog extends Vue {
        constructor(props: {  [index in keyof ElDialog]?: ElDialog[index]; }&{ children?: VNode|string } )
    }
    class Dropdown extends Vue {
        constructor(props: {  [index in keyof ElDropdown]?: ElDropdown[index]; }&{ children?: VNode|string } )
    }
    class DropdownItem extends Vue {
        constructor(props: {  [index in keyof ElDropdownItem]?: ElDropdownItem[index]; }&{ children?: VNode|string } )
    }
    class DropdownMenu extends Vue {
        constructor(props: {  [index in keyof ElDropdownMenu]?: ElDropdownMenu[index]; }&{ children?: VNode|string } )
    }
    class Footer extends Vue {
        constructor(props: {  [index in keyof ElFooter]?: ElFooter[index]; }&{ children?: VNode|string } )
    }
    class Form extends Vue {
        constructor(props: {  [index in keyof ElForm]?: ElForm[index]; }&{ children?: VNode|string } )
    }
    class FormItem extends Vue {
        constructor(props: {  [index in keyof ElFormItem]?: ElFormItem[index]; }&{ children?: VNode|string } )
    }
    class Header extends Vue {
        constructor(props: {  [index in keyof ElHeader]?: ElHeader[index]; }&{ children?: VNode|string } )
    }
    class Input extends Vue {
        constructor(props: {  [index in keyof ElInput]?: ElInput[index]; }&{ children?: VNode|string } )
    }
    class InputNumber extends Vue {
        constructor(props: {  [index in keyof ElInputNumber]?: ElInputNumber[index]; }&{ children?: VNode|string } )
    }
    class Loading extends Vue {
        constructor(props: {  [index in keyof ElLoading]?: ElLoading[index]; }&{ children?: VNode|string } )
    }
    class Main extends Vue {
        constructor(props: {  [index in keyof ElMain]?: ElMain[index]; }&{ children?: VNode|string } )
    }
    class Menu extends Vue {
        constructor(props: {  [index in keyof ElMenu]?: ElMenu[index]; }&{ children?: VNode|string } )
    }
    class MenuItem extends Vue {
        constructor(props: {  [index in keyof ElMenuItem]?: ElMenuItem[index]; }&{ children?: VNode|string } )
    }
    class MenuItemGroup extends Vue {
        constructor(props: {  [index in keyof ElMenuItemGroup]?: ElMenuItemGroup[index]; }&{ children?: VNode|string } )
    }
    class Message extends Vue {
        constructor(props: {  [index in keyof ElMessage]?: ElMessage[index]; }&{ children?: VNode|string } )
    }
    class MessageBox extends Vue {
        constructor(props: {  [index in keyof ElMessageBox]?: ElMessageBox[index]; }&{ children?: VNode|string } )
    }
    class Notification extends Vue {
        constructor(props: {  [index in keyof ElNotification]?: ElNotification[index]; }&{ children?: VNode|string } )
    }
    class Option extends Vue {
        constructor(props: {  [index in keyof ElOption]?: ElOption[index]; }&{ children?: VNode|string } )
    }
    class OptionGroup extends Vue {
        constructor(props: {  [index in keyof ElOptionGroup]?: ElOptionGroup[index]; }&{ children?: VNode|string } )
    }
    class Pagination extends Vue {
        constructor(props: {  [index in keyof ElPagination]?: ElPagination[index]; }&{ children?: VNode|string } )
    }
    class Popover extends Vue {
        constructor(props: {  [index in keyof ElPopover]?: ElPopover[index]; }&{ children?: VNode|string } )
    }
    class Progress extends Vue {
        constructor(props: {  [index in keyof ElProgress]?: ElProgress[index]; }&{ children?: VNode|string })
    }
    class Rate extends Vue {
        constructor(props: {  [index in keyof ElRate]?: ElRate[index]; }&{ children?: VNode|string })
    }
    class Radio extends Vue {
        constructor(props: {  [index in keyof ElRadio]?: ElRadio[index]; }&{ children?: VNode|string })
    }
    class RadioButton extends Vue {
        constructor(props: {  [index in keyof ElRadioButton]?: ElRadioButton[index]; }&{ children?: VNode|string })
    }
    class RadioGroup extends Vue {
        constructor(props: {  [index in keyof ElRadioGroup]?: ElRadioGroup[index]; }&{ children?: VNode|string })
    }
    class Row extends Vue {
        constructor(props: {  [index in keyof ElRow]?: ElRow[index]; }&{ children?: VNode|string })
    }
    class Select extends Vue {
        constructor(props: {  [index in keyof ElSelect]?: ElSelect[index]; }&{ children?: VNode|string })
    }
    class Slider extends Vue {
        constructor(props: {  [index in keyof ElSlider]?: ElSlider[index]; }&{ children?: VNode|string })
    }
    class Step extends Vue {
        constructor(props: {  [index in keyof ElStep]?: ElStep[index]; }&{ children?: VNode|string })
    }
    class Steps extends Vue {
        constructor(props: {  [index in keyof ElSteps]?: ElSteps[index]; }&{ children?: VNode|string })
    }
    class Submenu extends Vue {
        constructor(props: {  [index in keyof ElSubmenu]?: ElSubmenu[index]; }&{ children?: VNode|string })
    }
    class Switch extends Vue {
        constructor(props: {  [index in keyof ElSwitch]?: ElSwitch[index]; }&{ children?: VNode|string })
    }
    class Table extends Vue {
        constructor(props: {  [index in keyof ElTable]?: ElTable[index]; }&{ children?: VNode|string })
    }
    class TableColumn extends Vue {
        constructor(props: {  [index in keyof ElTableColumn]?: ElTableColumn[index]; }&{ children?: VNode|string })
    }
    class Tag extends Vue {
        constructor(props: {  [index in keyof ElTag]?: ElTag[index]; }&{ children?: VNode|string })
    }
    class Tabs extends Vue {
        constructor(props: {  [index in keyof ElTabs]?: ElTabs[index]; }&{ children?: VNode|string })
    }
    class TabPane extends Vue {
        constructor(props: {  [index in keyof ElTabPane]?: ElTabPane[index]; }&{ children?: VNode|string })
    }
    class Timeline extends Vue {
        constructor(props: {  [index in keyof ElTimeline]?: ElTimeline[index]; }&{ children?: VNode|string })
    }
    class TimelineItem extends Vue {
        constructor(props: {  [index in keyof ElTimelineItem]?: ElTimelineItem[index]; }&{ children?: VNode|string })
    }
    class TimePicker extends Vue {
        constructor(props: {  [index in keyof ElTimePicker]?: ElTimePicker[index]; }&{ children?: VNode|string })
    }
    class TimeSelect extends Vue {
        constructor(props: {  [index in keyof ElTimeSelect]?: ElTimeSelect[index]; }&{ children?: VNode|string })
    }
    class Tooltip extends Vue {
        constructor(props: {  [index in keyof ElTooltip]?: ElTooltip[index]; }&{ children?: VNode|string })
    }
    class Transfer extends Vue {
        constructor(props: {  [index in keyof ElTransfer]?: ElTransfer[index]; }&{ children?: VNode|string })
    }
    class Tree extends Vue {
        constructor(props: {  [index in keyof ElTree<any, any>]?: ElTree<any, any>[index]; }&{ children?: VNode|string })
    }
    class Upload extends Vue {
        constructor(props: {  [index in keyof ElUpload]?: ElUpload[index]; }&{ children?: VNode|string })
    }
    class Link extends Vue {
        constructor(props: {  [index in keyof ElLink]?: ElLink[index]; }&{ children?: VNode|string })
    }
    class Divider extends Vue {
        constructor(props: {  [index in keyof ElDivider]?: ElDivider[index]; }&{ children?: VNode|string })
    }
    class Icon extends Vue {
        constructor(props: {  [index in keyof ElIcon]?: ElIcon[index]; }&{ children?: VNode|string })
    }
    class Calendar extends Vue {
        constructor(props: {  [index in keyof ElCalendar]?: ElCalendar[index]; }&{ children?: VNode|string })
    }
    class Image extends Vue {
        constructor(props: {  [index in keyof ElImage]?: ElImage[index]; }&{ children?: VNode|string })
    }
    class Backtop extends Vue {
        constructor(props: {  [index in keyof ElBacktop]?: ElBacktop[index]; }&{ children?: VNode|string })
    }
    class InfiniteScroll extends Vue {
        constructor(props: {  [index in keyof ElInfiniteScroll]?: ElInfiniteScroll[index]; }&{ children?: VNode|string })
    }
    class PageHeader extends Vue {
        constructor(props: {  [index in keyof ElPageHeader]?: ElPageHeader[index]; }&{ children?: VNode|string })
    }
    class Avatar extends Vue {
        constructor(props: {  [index in keyof ElAvatar]?: ElAvatar[index]; }&{ children?: VNode|string })
    }
    class Drawer extends Vue {
        constructor(props: {  [index in keyof ElDrawer]?: ElDrawer[index]; }&{ children?: VNode|string })
    }
    class Popconfirm extends Vue {
        constructor(props: {  [index in keyof ElPopconfirm]?: ElPopconfirm[index]; }&{ children?: VNode|string })
    }

   

}