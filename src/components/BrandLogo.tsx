import { useId } from 'react'
import signature from '../../imgs/ASSINATURA VISUAL.png'

export const BrandLogo = () => {
  const filterId = `brand-${useId().replace(/:/g, '')}`

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="90 565 1620 495"
      width="190"
      height="58"
      role="img"
      aria-label="SmartTraffic — início"
      className="block h-auto w-[190px] max-w-full"
    >
      <defs>
        <filter id={filterId} colorInterpolationFilters="sRGB" x="0" y="0" width="100%" height="100%">
          {/* Make the dark backdrop transparent while retaining the original brand colors. */}
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    1 2 0 0 -0.65"
          />
        </filter>
      </defs>
      <image href={signature} width="1849" height="1708" filter={`url(#${filterId})`} />
    </svg>
  )
}
