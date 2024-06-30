import { themeColors } from "@/global/theme";
import { IconType } from "react-icons";

type ContractCardProps = {
  title: string;
  value: string;
  cardIcon: IconType;
  hasBadge?: boolean;
  isBadgePositive?: boolean;
  badgeValue?: string;
};
export function ContractCard({
  title,
  value,
  cardIcon: CardIcon,
  badgeValue,
  hasBadge,
  isBadgePositive,
}: ContractCardProps) {
  return (
    <div className="border rounded	border-slate-medium	flex items-center ">
      <div className="p-4 rounded-full">
        <CardIcon size={32} color={themeColors.secondary} />
      </div>
      <div className="w-full px-4 drop-shadow	">
        <div className="text-gray-default text-sm font-semibold">{title}</div>
        <div className="flex items-center justify-between">
          <div className="text-gray-dark text-xl font-semibold">{value}</div>
          {hasBadge && (
            <div
              className={`p-1 rounded text-xs font-semibold ${
                isBadgePositive
                  ? "bg-green-200 text-green-900"
                  : "bg-red-200 text-red-900"
              }`}
            >
              {badgeValue}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
