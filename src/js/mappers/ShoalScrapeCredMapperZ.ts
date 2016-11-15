import Mapper from './MapperZ';
import ShoalScrapeCredXDto from '../model/dtoZ/shoalScrapeCred/ShoalScrapeCredXDto';
import ShoalScrapeCredDto from '../model/dtoZ/shoalScrapeCred/ShoalScrapeCredDto';
import ShoalScrapeCredState from '../model/stateZ/shoalScrapeCred/ShoalScrapeCredState';
import ShoalScrapeCredRecord from '../model/stateZ/shoalScrapeCred/ShoalScrapeCredRecord';
import { 
    refScraperUserAgent
} from './common/AssemblyUtil';

class ShoalScrapeCredMapperStatic implements Mapper { 
    toState(result: ShoalScrapeCredXDto): ShoalScrapeCredState {
        const state = new ShoalScrapeCredState();

        state.records = result.shoal_scrape_creds.map(dto => {             
            return {
                scraperUserAgent: refScraperUserAgent(dto, result.scraper_user_agents),
                password: dto.password,
                username: dto.username,
                name: dto.name,
                id: dto.id
            }
            
        });        

        return state;
    }

    toForm(dto: ShoalScrapeCredDto) {
        return {
            scraperUserAgent: dto.scraper_user_agent,
            password: dto.password,
            username: dto.username,
            name: dto.name,
            id: dto.id
        }
    }

    toDto(state: ShoalScrapeCredRecord): ShoalScrapeCredDto {
        return {
            username: state.username,
            password: state.password,
            scraper_user_agent: state.scraperUserAgent && state.scraperUserAgent.id,
            "name": state.name,
            commit: true,
            id: state.id            
        }
    }
}
const ShoalScrapeCredMapper = new ShoalScrapeCredMapperStatic();
export default ShoalScrapeCredMapper;