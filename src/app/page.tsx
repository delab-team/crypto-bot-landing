import SalesInfo from '@/sections/sales-info';
import InstructionBlock from '@/sections/instruction-block';
import HeroBlock from '@/sections/hero-block';
import CommunityBlock from '@/sections/community-block';
import FeaturesBlock from '@/sections/features-block';
import { ApiBlock } from '@/sections/api-block';

export default function Home() {
    return (
        <>
            <HeroBlock />
            <SalesInfo />
            <FeaturesBlock />
            <InstructionBlock />
            <ApiBlock />
            <CommunityBlock />
        </>
    );
}
