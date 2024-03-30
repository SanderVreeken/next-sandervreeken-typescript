import EButton from '@/types/Button'

export default interface IButton {
    href: string
    icon?: React.ReactNode
    title: string
    type?: EButton
}