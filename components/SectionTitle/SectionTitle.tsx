import { SectionTitleProps } from "@/utils/types"

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
    title,
    titleStyles,
}) => {
    return (
        <h2 className={`title ${titleStyles}`}>
            {title.main}
            <span className="font-medium">
                {title.accent}
            </span>
        </h2>
    )
}