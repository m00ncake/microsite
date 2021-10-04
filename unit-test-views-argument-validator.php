<?php
 
 
namespace Drupal\Tests\custom_views_argument_validator\Unit;
 
use Drupal\Core\Entity\EntityStorageInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Entity\Query\QueryInterface;
use Drupal\custom_views_argument_validator\Plugin\views\argument_validator\UsernameArgumentValidator;
use Drupal\node\Entity\Node;
use Drupal\Tests\UnitTestCase;
use Drupal\Core\DependencyInjection\ContainerBuilder;
use Drupal\views\Plugin\views\PluginBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
 
/**
 * @coversDefaultClass Drupal\custom_views_argument_validator\Plugin\views\argument_validator\UsernameArgumentValidator
 *
 * @group custom
 */
class UsernameArgumentValidatorTest extends UnitTestCase
{
 
  protected $entityQuery;
 
  protected function setUp()
  {
    parent::setUp();
    $container = new ContainerBuilder();
    \Drupal::setContainer($container);
    $entityNodeMock = $this->getMockBuilder(Node::class)
      ->disableOriginalConstructor()
      ->getMock();
    $entityStorage = $this->getMockBuilder(EntityStorageInterface::class)
      ->disableOriginalConstructor()
      ->getMock();
    $entityStorage->expects($this->any())
      ->method('load')
      ->willReturn($entityNodeMock); /* checking if you have a node entity */
 
 
    $methods = get_class_methods('Drupal\Core\Entity\EntityTypeManagerInterface');
    $entityTypeManager = $this->getMockBuilder(EntityTypeManagerInterface::class)
      ->disableOriginalConstructor()
      ->setMethods($methods)
      ->getMock();
    $entityTypeManager->expects($this->any())
      ->method('getStorage')
      ->willReturn($entityStorage);
    $container->set('entity_type.manager', $entityTypeManager);
 
    $methods = get_class_methods('Drupal\Core\Entity\Query\QueryInterface');
    $this->entityQuery = $this->getMockBuilder(QueryInterface::class)
      ->disableOriginalConstructor()
      ->setMethods($methods)
      ->getMock();
 
    $this->entityQuery->expects($this->any())
      ->method('condition')
      ->willReturn($this->entityQuery);
 
    $this->entityQuery->expects($this->any())
      ->method('count')
      ->willReturn($this->entityQuery);
 
    $this->entityQuery->expects($this->any())
      ->method('execute')
      ->will($this->onConsecutiveCalls(0, 3));
 
    $entityStorage->expects($this->any())
      ->method('getQuery')
      ->willReturn($this->entityQuery);
 
    $container->set('entity.query', $this->entityQuery); /* checking if all these methods are working */
  }
 
  public function testFakeUserArgument()
  {
    $usernameArgumentValidator = new UsernameArgumentValidator([], 'username_has_created_content', []); /* Creating Username Validator Entity, creating an object of this class */
    $validateFakeArgument = $usernameArgumentValidator->validateArgument('foo'); /* creating a new variable to validate the argument that you've passed to this class */
    $this->assertFalse($validateFakeArgument); /* check if your test was successful by returning FALSE */
    $validateFakeArgument = $usernameArgumentValidator->validateArgument('njagannath'); 
    $this->assertTrue($validateFakeArgument); /* check if your test was succesful by returning TRUE */
 
  }
}
