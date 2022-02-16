import { getSequelize } from '../../postgres/index';
import * as People from '../../people';
import * as Campuses from '../../campus';
import * as Interaction from '../index';
import * as ContentItem from '../../content-items';
import * as Media from '../../media';
import * as ContentItemCategory from '../../content-item-categories';
import { setupPostgresTestEnv } from '../../utils/testUtils';

describe('Interaction model', () => {
  let sequelize;
  let globalSequelize;
  beforeEach(async () => {
    sequelize = getSequelize({ churchSlug: 'apollos_demo' });
    globalSequelize = getSequelize({ churchSlug: 'global' });
    await setupPostgresTestEnv(
      [Interaction, People, Campuses, ContentItem, Media, ContentItemCategory],
      { church: { slug: 'apollos_demo' } }
    );
  });
  afterEach(async () => {
    await sequelize.truncate({ cascade: true });
    await globalSequelize.truncate({ cascade: true });
  });

  it('constructs without issues', async () => {
    let interaction = await sequelize.models.interaction.create({
      action: 'VIEW',
      nodeId: '6f9efa03-e146-45a0-9180-98591f6cdb72',
      nodeType: 'ContentItem',
    });

    const me = await sequelize.models.people.create({
      firstName: 'Vincent',
      lastName: 'Wilson',
      gender: 'MALE',
      originType: 'rock',
      originId: '1',
    });

    await interaction.setPerson(me);

    interaction = await interaction.reload();

    expect(interaction.personId).toBe(me.id);
  });
});
