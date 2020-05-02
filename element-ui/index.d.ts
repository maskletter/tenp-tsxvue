/**
 * 对应
 * "element-ui": "^2.13.1"
 */

import Vue from 'vue'
import 'element-ui'
import 'Vue'
import * as Css from 'csstype'
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
interface CommonProps<T> {
    children?: VNode|string|VNode[]
    id?: string
    class?: string|string[]|object
    style?: Css.Properties
    props?: T,
    attrs?: T
}

declare module 'element-ui' {
  
    class Alert extends Vue {
        constructor(props: {  [index in keyof ElAlert]?: ElAlert[index]; }&CommonProps<{  [index in keyof ElAlert]?: ElAlert[index]; } >)
    }
    class Aside extends Vue {
        constructor(props: {  [index in keyof ElAside]?: ElAside[index]; }&CommonProps<{  [index in keyof ElAside]?: ElAside[index]; }>)
    }
    class Autocomplete extends Vue {
        constructor(props: {  [index in keyof ElAutocomplete]?: ElAutocomplete[index]; }&CommonProps<{  [index in keyof ElAutocomplete]?: ElAutocomplete[index]; }>)
    }
    class Badge extends Vue {
        constructor(props: {  [index in keyof ElBadge]?: ElBadge[index]; }&CommonProps<{  [index in keyof ElBadge]?: ElBadge[index]; }>)
    }
    class Breadcrumb extends Vue {
        constructor(props: {  [index in keyof ElBreadcrumb]?: ElBreadcrumb[index]; }&CommonProps<{  [index in keyof ElBreadcrumb]?: ElBreadcrumb[index]; }>)
    }
    class BreadcrumbItem extends Vue {
        constructor(props: {  [index in keyof ElBreadcrumbItem]?: ElBreadcrumbItem[index]; }&CommonProps<{  [index in keyof ElBreadcrumbItem]?: ElBreadcrumbItem[index]; }> )
    }
    class Button extends Vue {
        constructor(props: { [index in keyof ElButton]?: ElButton[index]; }&CommonProps<{ [index in keyof ElButton]?: ElButton[index]; }> )
    }
    class ButtonGroup extends Vue {
        constructor(props: {  [index in keyof ElButtonGroup]?: ElButtonGroup[index]; }&CommonProps<{  [index in keyof ElButtonGroup]?: ElButtonGroup[index]; }> )
    }
    class Card extends Vue {
        constructor(props: {  [index in keyof ElCard]?: ElCard[index]; }&CommonProps<{  [index in keyof ElCard]?: ElCard[index]; }>)
    }
    class Carousel extends Vue {
        constructor(props: {  [index in keyof ElCarousel]?: ElCarousel[index]; }&CommonProps<{  [index in keyof ElCarousel]?: ElCarousel[index]; }> )
    }
    class CarouselItem extends Vue {
        constructor(props: {  [index in keyof ElCarouselItem]?: ElCarouselItem[index]; }&CommonProps<{  [index in keyof ElCarouselItem]?: ElCarouselItem[index]; }> )
    }
    class Cascader extends Vue {
        constructor(props: {  [index in keyof ElCascader]?: ElCascader[index]; }&CommonProps<{  [index in keyof ElCascader]?: ElCascader[index]; }> )
    }
    class Checkbox extends Vue {
        constructor(props: {  [index in keyof ElCheckbox]?: ElCheckbox[index]; }&CommonProps<{  [index in keyof ElCheckbox]?: ElCheckbox[index]; }> )
    }
    class CheckboxButton extends Vue {
        constructor(props: {  [index in keyof ElCheckboxButton]?: ElCheckboxButton[index]; }&CommonProps<{  [index in keyof ElCheckboxButton]?: ElCheckboxButton[index]; }> )
    }
    class CheckboxGroup extends Vue {
        constructor(props: {  [index in keyof ElCheckboxGroup]?: ElCheckboxGroup[index]; }&CommonProps<{  [index in keyof ElCheckboxGroup]?: ElCheckboxGroup[index]; }> )
    }
    class Col extends Vue {
        constructor(props: {  [index in keyof ElCol]?: ElCol[index]; }&CommonProps<{  [index in keyof ElCol]?: ElCol[index]; }> )
    }
    class Collapse extends Vue {
        constructor(props: {  [index in keyof ElCollapse]?: ElCollapse[index]; }&CommonProps<{  [index in keyof ElCollapse]?: ElCollapse[index]; }> )
    }
    class CollapseItem extends Vue {
        constructor(props: {  [index in keyof ElCollapseItem]?: ElCollapseItem[index]; }&CommonProps<{  [index in keyof ElCollapseItem]?: ElCollapseItem[index]; }> )
    }
    class ColorPicker extends Vue {
        constructor(props: {  [index in keyof ElColorPicker]?: ElColorPicker[index]; }&CommonProps<{  [index in keyof ElColorPicker]?: ElColorPicker[index]; }> )
    }
    class Container extends Vue {
        constructor(props: {  [index in keyof ElContainer]?: ElContainer[index]; }&CommonProps<{  [index in keyof ElContainer]?: ElContainer[index]; }> )
    }
    class DatePicker extends Vue {
        constructor(props: {  [index in keyof ElDatePicker]?: ElDatePicker[index]; }&CommonProps<{  [index in keyof ElDatePicker]?: ElDatePicker[index]; }> )
    }
    class Dialog extends Vue {
        constructor(props: {  [index in keyof ElDialog]?: ElDialog[index]; }&CommonProps<{  [index in keyof ElDialog]?: ElDialog[index]; }> )
    }
    class Dropdown extends Vue {
        constructor(props: {  [index in keyof ElDropdown]?: ElDropdown[index]; }&CommonProps<{  [index in keyof ElDropdown]?: ElDropdown[index]; }> )
    }
    class DropdownItem extends Vue {
        constructor(props: {  [index in keyof ElDropdownItem]?: ElDropdownItem[index]; }&CommonProps<{  [index in keyof ElDropdownItem]?: ElDropdownItem[index]; }> )
    }
    class DropdownMenu extends Vue {
        constructor(props: {  [index in keyof ElDropdownMenu]?: ElDropdownMenu[index]; }&CommonProps<{  [index in keyof ElDropdownMenu]?: ElDropdownMenu[index]; }> )
    }
    class Footer extends Vue {
        constructor(props: {  [index in keyof ElFooter]?: ElFooter[index]; }&CommonProps<{  [index in keyof ElFooter]?: ElFooter[index]; }> )
    }
    class Form extends Vue {
        constructor(props: {  [index in keyof ElForm]?: ElForm[index]; }&CommonProps<{  [index in keyof ElForm]?: ElForm[index]; }> )
    }
    class FormItem extends Vue {
        constructor(props: {  [index in keyof ElFormItem]?: ElFormItem[index]; }&CommonProps<{  [index in keyof ElFormItem]?: ElFormItem[index]; }> )
    }
    class Header extends Vue {
        constructor(props: {  [index in keyof ElHeader]?: ElHeader[index]; }&CommonProps<{  [index in keyof ElHeader]?: ElHeader[index]; }> )
    }
    class Input extends Vue {
        constructor(props: {  [index in keyof ElInput]?: ElInput[index]; }&CommonProps<{  [index in keyof ElInput]?: ElInput[index]; }> )
    }
    class InputNumber extends Vue {
        constructor(props: {  [index in keyof ElInputNumber]?: ElInputNumber[index]; }&CommonProps<{  [index in keyof ElInputNumber]?: ElInputNumber[index]; }> )
    }
    
    class Main extends Vue {
        constructor(props: {  [index in keyof ElMain]?: ElMain[index]; }&CommonProps<{  [index in keyof ElMain]?: ElMain[index]; }> )
    }
    class Menu extends Vue {
        constructor(props: {  [index in keyof ElMenu]?: ElMenu[index]; }&CommonProps<{  [index in keyof ElMenu]?: ElMenu[index]; }> )
    }
    class MenuItem extends Vue {
        constructor(props: {  [index in keyof ElMenuItem]?: ElMenuItem[index]; }&CommonProps<{  [index in keyof ElMenuItem]?: ElMenuItem[index]; }> )
    }
    class MenuItemGroup extends Vue {
        constructor(props: {  [index in keyof ElMenuItemGroup]?: ElMenuItemGroup[index]; }&CommonProps<{  [index in keyof ElMenuItemGroup]?: ElMenuItemGroup[index]; }> )
    }
  
    class Notification extends Vue {
        constructor(props: {  [index in keyof ElNotification]?: ElNotification[index]; }&CommonProps<{  [index in keyof ElNotification]?: ElNotification[index]; }> )
    }
    class Option extends Vue {
        constructor(props: {  [index in keyof ElOption]?: ElOption[index]; }&CommonProps<{  [index in keyof ElOption]?: ElOption[index]; }> )
    }
    class OptionGroup extends Vue {
        constructor(props: {  [index in keyof ElOptionGroup]?: ElOptionGroup[index]; }&CommonProps<{  [index in keyof ElOptionGroup]?: ElOptionGroup[index]; }> )
    }
    class Pagination extends Vue {
        constructor(props: {  [index in keyof ElPagination]?: ElPagination[index]; }&CommonProps<{  [index in keyof ElPagination]?: ElPagination[index]; }>&{
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
        } )
    }
    class Popover extends Vue {
        constructor(props: {  [index in keyof ElPopover]?: ElPopover[index]; }&CommonProps <{  [index in keyof ElPopover]?: ElPopover[index]; }>)
    }
    class Progress extends Vue {
        constructor(props: {  [index in keyof ElProgress]?: ElProgress[index]; }&CommonProps<{  [index in keyof ElProgress]?: ElProgress[index]; }>)
    }
    class Rate extends Vue {
        constructor(props: {  [index in keyof ElRate]?: ElRate[index]; }&CommonProps<{  [index in keyof ElRate]?: ElRate[index]; }>)
    }
    class Radio extends Vue {
        constructor(props: {  [index in keyof ElRadio]?: ElRadio[index]; }&CommonProps<{  [index in keyof ElRadio]?: ElRadio[index]; }>)
    }
    class RadioButton extends Vue {
        constructor(props: {  [index in keyof ElRadioButton]?: ElRadioButton[index]; }&CommonProps<{  [index in keyof ElRadioButton]?: ElRadioButton[index]; }>)
    }
    class RadioGroup extends Vue {
        constructor(props: {  [index in keyof ElRadioGroup]?: ElRadioGroup[index]; }&CommonProps<{  [index in keyof ElRadioGroup]?: ElRadioGroup[index]; }>)
    }
    class Row extends Vue {
        constructor(props: {  [index in keyof ElRow]?: ElRow[index]; }&CommonProps<{  [index in keyof ElRow]?: ElRow[index]; }>)
    }
    class Select extends Vue {
        constructor(props: {  [index in keyof ElSelect]?: ElSelect[index]; }&CommonProps<{  [index in keyof ElSelect]?: ElSelect[index]; }>)
    }
    class Slider extends Vue {
        constructor(props: {  [index in keyof ElSlider]?: ElSlider[index]; }&CommonProps<{  [index in keyof ElSlider]?: ElSlider[index]; }>)
    }
    class Step extends Vue {
        constructor(props: {  [index in keyof ElStep]?: ElStep[index]; }&CommonProps<{  [index in keyof ElStep]?: ElStep[index]; }>)
    }
    class Steps extends Vue {
        constructor(props: {  [index in keyof ElSteps]?: ElSteps[index]; }&CommonProps<{  [index in keyof ElSteps]?: ElSteps[index]; }>)
    }
    class Submenu extends Vue {
        constructor(props: {  [index in keyof ElSubmenu]?: ElSubmenu[index]; }&CommonProps<{  [index in keyof ElSubmenu]?: ElSubmenu[index]; }>)
    }
    class Switch extends Vue {
        constructor(props: {  [index in keyof ElSwitch]?: ElSwitch[index]; }&CommonProps<{  [index in keyof ElSwitch]?: ElSwitch[index]; }>)
    }
    class Table extends Vue {
        constructor(props: {  [index in keyof ElTable]?: ElTable[index]; }&CommonProps<{  [index in keyof ElTable]?: ElTable[index]; }>)
    }
    class TableColumn extends Vue {
        constructor(props: {  [index in keyof ElTableColumn]?: ElTableColumn[index]; }&CommonProps<{  [index in keyof ElTableColumn]?: ElTableColumn[index]; }>)
    }
    class Tag extends Vue {
        constructor(props: {  [index in keyof ElTag]?: ElTag[index]; }&CommonProps<{  [index in keyof ElTag]?: ElTag[index]; }>)
    }
    class Tabs extends Vue {
        constructor(props: {  [index in keyof ElTabs]?: ElTabs[index]; }&CommonProps<{  [index in keyof ElTabs]?: ElTabs[index]; }>)
    }
    class TabPane extends Vue {
        constructor(props: {  [index in keyof ElTabPane]?: ElTabPane[index]; }&CommonProps<{  [index in keyof ElTabPane]?: ElTabPane[index]; }>)
    }
    class Timeline extends Vue {
        constructor(props: {  [index in keyof ElTimeline]?: ElTimeline[index]; }&CommonProps<{  [index in keyof ElTimeline]?: ElTimeline[index]; }>)
    }
    class TimelineItem extends Vue {
        constructor(props: {  [index in keyof ElTimelineItem]?: ElTimelineItem[index]; }&CommonProps<{  [index in keyof ElTimelineItem]?: ElTimelineItem[index]; }>)
    }
    class TimePicker extends Vue {
        constructor(props: {  [index in keyof ElTimePicker]?: ElTimePicker[index]; }&CommonProps<{  [index in keyof ElTimePicker]?: ElTimePicker[index]; }>)
    }
    class TimeSelect extends Vue {
        constructor(props: {  [index in keyof ElTimeSelect]?: ElTimeSelect[index]; }&CommonProps<{  [index in keyof ElTimeSelect]?: ElTimeSelect[index]; }>)
    }
    class Tooltip extends Vue {
        constructor(props: {  [index in keyof ElTooltip]?: ElTooltip[index]; }&CommonProps<{  [index in keyof ElTooltip]?: ElTooltip[index]; }>)
    }
    class Transfer extends Vue {
        constructor(props: {  [index in keyof ElTransfer]?: ElTransfer[index]; }&CommonProps<{  [index in keyof ElTransfer]?: ElTransfer[index]; }>)
    }
    class Tree extends Vue {
        constructor(props: {  [index in keyof ElTree<any, any>]?: ElTree<any, any>[index]; }&CommonProps<{  [index in keyof ElTree<any, any>]?: ElTree<any, any>[index]; }>)
    }
    class Upload extends Vue {
        constructor(props: {  [index in keyof ElUpload]?: ElUpload[index]; }&CommonProps<{  [index in keyof ElUpload]?: ElUpload[index]; }>)
    }
    class Link extends Vue {
        constructor(props: {  [index in keyof ElLink]?: ElLink[index]; }&CommonProps<{  [index in keyof ElLink]?: ElLink[index]; }>)
    }
    class Divider extends Vue {
        constructor(props: {  [index in keyof ElDivider]?: ElDivider[index]; }&CommonProps<{  [index in keyof ElDivider]?: ElDivider[index]; }>)
    }
    class Icon extends Vue {
        constructor(props: {  [index in keyof ElIcon]?: ElIcon[index]; }&CommonProps<{  [index in keyof ElIcon]?: ElIcon[index]; }>)
    }
    class Calendar extends Vue {
        constructor(props: {  [index in keyof ElCalendar]?: ElCalendar[index]; }&CommonProps<{  [index in keyof ElCalendar]?: ElCalendar[index]; }>)
    }
    class Image extends Vue {
        constructor(props: {  [index in keyof ElImage]?: ElImage[index]; }&CommonProps<{  [index in keyof ElImage]?: ElImage[index]; }>)
    }
    class Backtop extends Vue {
        constructor(props: {  [index in keyof ElBacktop]?: ElBacktop[index]; }&CommonProps<{  [index in keyof ElBacktop]?: ElBacktop[index]; }>)
    }
    class InfiniteScroll extends Vue {
        constructor(props: {  [index in keyof ElInfiniteScroll]?: ElInfiniteScroll[index]; }&CommonProps<{  [index in keyof ElInfiniteScroll]?: ElInfiniteScroll[index]; }>)
    }
    class PageHeader extends Vue {
        constructor(props: {  [index in keyof ElPageHeader]?: ElPageHeader[index]; }&CommonProps<{  [index in keyof ElPageHeader]?: ElPageHeader[index]; }>)
    }
    class Avatar extends Vue {
        constructor(props: {  [index in keyof ElAvatar]?: ElAvatar[index]; }&CommonProps<{  [index in keyof ElAvatar]?: ElAvatar[index]; }>)
    }
    class Drawer extends Vue {
        constructor(props: {  [index in keyof ElDrawer]?: ElDrawer[index]; }&CommonProps<{  [index in keyof ElDrawer]?: ElDrawer[index]; }>)
    }
    class Popconfirm extends Vue {
        constructor(props: {  [index in keyof ElPopconfirm]?: ElPopconfirm[index]; }&CommonProps<{  [index in keyof ElPopconfirm]?: ElPopconfirm[index]; }>)
    }

   

}
