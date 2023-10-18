import { memo } from 'react'
import { SvgIconComponent } from '../SvgIconComponent'

const Lock: SvgIconComponent = ({ className }) => (
  <svg className={className} width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="mask0_959_19524"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="8"
      y="0"
      width="64"
      height="80"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59.7326 20.0007V29.5278L71.4483 29.5283V80H8V29.5462H19.7147V20.0007C19.7147 12.8547 23.5283 6.25218 29.719 2.67951C35.9099 -0.893169 43.5369 -0.893169 49.7283 2.67951C55.9191 6.25283 59.7326 12.8553 59.7326 20.0007ZM25.1714 29.5278H54.2759L54.2765 20.0007C54.2765 14.804 51.5028 10.0025 47.0002 7.40379C42.4977 4.80578 36.9503 4.80578 32.4477 7.40379C27.9451 10.0025 25.1714 14.804 25.1714 20.0007V29.5278ZM47.4846 49.6967C47.4846 53.0758 45.325 55.9505 42.3107 57.0159V68.0773H37.1368V57.0159C34.1225 55.9505 31.9629 53.0758 31.9629 49.6967C31.9629 45.4105 35.4376 41.9358 39.7238 41.9358C44.01 41.9358 47.4846 45.4105 47.4846 49.6967Z"
        fill="black"
      />
    </mask>
    <g mask="url(#mask0_959_19524)">
      <rect x="-1.53125" y="-10.6206" width="82.5795" height="119.122" fill="white" />
    </g>
  </svg>
)

export default memo(Lock)
