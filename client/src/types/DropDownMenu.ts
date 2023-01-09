export type DropDownMenuType = {
    error: string
    selected?: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}