import Image from 'next/image'

import { FeatureCardProps } from '@/types/featureCardProps'

import s from '@/styles/components/featureCardStyles.module.scss'

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, description }) => {
   return (
      <div className={s.featureCard}>
         <Image src={image} alt="Feature" className={s.image} width={300} height={300} />

         <div className={s.divider}>
            <h3 className={s.title}>{title}</h3>

            <p className={s.description}>{description}</p>
         </div>
      </div>
   )
}

export default FeatureCard
